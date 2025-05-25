import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
    try {
      const {email, password} = req.body;

      const user = await userModel.findOne({email})

      if(!user){
        return res.json({success:false, message:"User doesn't exists"})
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if(isMatch){
        const token = createToken(user._id)
        res.json({success:true, token})
      }
      else{
        res.send({success:false, message: "Wrong Password"})
      }

    } catch (error) {
      res.json({success:false, message: error.message})
    }
};


const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.json({ message: "Please Enter a strong Password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name,
        email,
        password : hashedPassword
    })

    const user = await newUser.save();

    const token = createToken(user._id)

    res.json({success : true, token})
  } 
  
  catch (error) {
    res.json({success : false, message : error.message})
  }
};

export { loginUser, registerUser };
