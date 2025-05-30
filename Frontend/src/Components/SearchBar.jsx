import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
       <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full'>
          <input onChange={(e)=>setSearch(e.target.value)} value={search} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search'/>
          <img className='w-4' src={assets.search_icon}/>
       </div>
       <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon}/>
    </div>
  ) : null
}

export default SearchBar
