import React from 'react'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Products2 from '../Components/Products2'
import './Shop.css'



const Shop = () => {
  return (
    <div>
      <Sidebar />
      <div className='side2'>
      <Products2/>     
        
      <Footer  />
      </div>
     
      
    </div>
  )
}

export default Shop