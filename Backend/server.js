import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import "./config/cloudinary.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 4000
connectDB()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)


app.get('/', (req, res) => {
    res.send('API working')
})


app.listen(port, () => console.log(`Server running on port ${port}`))