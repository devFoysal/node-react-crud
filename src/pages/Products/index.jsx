import React from 'react'
import ProductCard from '../../components/Cards/ProductCard'

const Products = () => {
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-3 gap-4 py-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  )
}

export default Products