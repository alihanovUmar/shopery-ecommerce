import React from 'react'
import ProductCard from '../../components/common/Cards/ProductCard'

export default function ShopProduckt() {
  return (
    <div>
      <div className=" p-[100px]">
        <ProductCard className="rounded-md shadow-lg hover:shadow-x transition-shadow duration-500 border border-gray-200" />
      </div>
    </div>
  )
}
