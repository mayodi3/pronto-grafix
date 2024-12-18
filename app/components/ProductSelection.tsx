"use client"

import React from 'react'
import Image from 'next/image'

interface ProductSelectionProps {
  selectedProduct: string
  setSelectedProduct: (product: string) => void
}

const ProductSelection: React.FC<ProductSelectionProps> = ({ selectedProduct, setSelectedProduct }) => {
  const products = ['tshirt', 'hoodie', 'mug']

  return (
    <div className="flex space-x-4 mb-4">
      {products.map((product) => (
        <button
          key={product}
          className={`px-4 py-2 rounded flex flex-col items-center ${
            selectedProduct === product ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-100'
          }`}
          onClick={() => setSelectedProduct(product)}
        >
          <Image
            src={`/${product}_front.png`}
            alt={product}
            width={50}
            height={50}
            className="mb-2"
          />
          {product.charAt(0).toUpperCase() + product.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default ProductSelection

