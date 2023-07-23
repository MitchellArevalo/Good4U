import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FilterBar from '../../components/FilterBar/FilterBar';
import ListProducts from '../../components/ListProducts/ListProducts';
function Products() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col  md:flex-row md:gap-10 m-5 '>
      <FilterBar/>
      <ListProducts/>
    </div>
    <Footer/>
    </>
  )
}

export default Products