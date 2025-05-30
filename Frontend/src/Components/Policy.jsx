import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
       <div>
          <img src={assets.quality_icon} className='w-12 m-auto mb-5'/>
          <p className='font-semibold'>Exchange Policy</p>
          <p className='text-gray-400'>We offer hassle free exchange policy</p>
       </div>
       <div>
          <img src={assets.quality_icon} className='w-12 m-auto mb-5'/>
          <p className='font-semibold'>Return Policy</p>
          <p className='text-gray-400'>7 day free return policy</p>
       </div>
    </div>
  )
}

export default Policy
