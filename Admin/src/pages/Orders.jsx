import { useState, useEffect } from 'react'
import { backendUrl, currency } from '../App.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets.js'

const Orders = ({token}) => {
  console.log("Orders component rendered");

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
  if (!token) {
    console.log("No token provided");
    return null;
  }

  console.log("Token received:", token);
  try {
    const url = backendUrl + '/api/order/list';
    console.log("Requesting:", url);

    const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } });
    console.log("API response:", response.data);
    console.log("Orders fetched:", response.data.orders);

    if (response.data.success) {
      setOrders(response.data.orders);
      console.log("Orders received:", response.data.orders);
    } else {
      toast.error(response.data.message || "Failed to fetch orders");
    }
  } catch (error) {
    console.log("Error fetching orders:", error);
    toast.error(error.message);
  }
}


  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status: event.target.value}, {headers:{token}})
      if(response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img className='w-12' src={assets.parcel_icon} alt=""/>
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if(index === order.items.length - 1) {
                      return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span> {item.size} </span></p>
                    } else {
                      return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span> {item.size} ,</span></p>
                    }
                  })}
                </div>
                <p className='mt-3 mb-2 font-medium'>{order.address.firstName + ", " + order.address.lastName}</p>
                <div>
                  <p>{order.address.street + ", "}</p>
                  <p>{order.address.city + ", " + order.address.state + ", " + order.address.country}</p>
                </div>
                <p>{order.address.phone}</p>
              </div>

              <div>
                <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                <p className='mt-3'>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
              </div>

              <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
              
              <div>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='p-2 font-semibold'>
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipping">Shipping</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
