import React from 'react'
import FilterBar from '../../components/FilterBar/FilterBar';
import ListProducts from '../../components/ListProducts/ListProducts';
function Products() {
  return (
    <div className='flex gap-10  '>
      <FilterBar/>
      <ListProducts/>




    </div>
  )
}

export default Products