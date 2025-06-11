import userModel from '../models/userModel.js';
import orderModel from "../models/orderModel.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message : "Order Placed" });
  } catch (error) {
    console.log(error)
    res.json({success : false, message : error.message})
  }
};

const placeOrderStripe = async () => {};

const placeOrderRazorpay = async () => {};

const allOrders = async () => {};

const userOrders = async () => {};

const updateStatus = async () => {};

export {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};
