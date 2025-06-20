import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../Context/ShopContext.jsx'
import { assets } from '../assets/assets.js'
import Title from '../Components/Title.jsx'
import ProductItem from '../Components/ProductItem.jsx'

const Collections = () => {

  const {products, search, showSearch} = useContext(ShopContext)
  const [filter, setFilter] = useState(false) 
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [SubCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavant')

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item != e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item != e.target.value) )
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if(search && showSearch){
      productsCopy = products.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter((item) => category.includes(item.category))
    }

    if(SubCategory.length > 0){
      productsCopy = productsCopy.filter((item) => SubCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortByPrice = () => {
    let fpCopy = filterProducts.slice()

    switch(sortType){
      case 'low-high' :
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)))
        break;

      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;

      default :
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, SubCategory, search, showSearch, products])

  useEffect(() => {
    sortByPrice()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
       
       {/* Filter Options */}
       <div className='min-w-60'>
          <p onClick={()=> setFilter(!filter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
             <img className={`h-3 sm:hidden ${filter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>

          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}/> Men
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}/> Women
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory}/> Kids
              </p>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${filter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
              </p>
            </div>
          </div>
       </div>

       {/* Right Side */}
       <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
             <Title text1={'ALL'} text2={'COLLECTIONS'}/>

             {/* Product Sorting */}
             <select onChange={(e)=>(setSortType(e.target.value))} className='border-2 border-gray-300 text-sm px-2'>
               <option value="relavant">Sort by : Relavant</option>
               <option value="low-high">Sort by : Low to High</option>
               <option value="high-low">Sort by : High to Low</option>
             </select>
          </div>

          {/* Mapping of Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} 
                id={item._id} 
                name={item.name}
                image={item.image}
                price={item.price}
                />
              ))
            }
          </div>
       </div>
    </div>
  )
}

export default Collections
