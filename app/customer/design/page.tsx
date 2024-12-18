'use client'

import Canvas from '@/app/components/Canvas'
import ColorPalette from '@/app/components/ColorPallete.tsx'
import ProductSelection from '@/app/components/ProductSelection'
import { useState } from 'react'


export default function ProductCustomizer() {
  const [selectedProduct, setSelectedProduct] = useState('tshirt')
  const [productColor, setProductColor] = useState('white')
  const [orientation, setOrientation] = useState('front')

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold mb-4">Custom Product Designer</h1>
          <ProductSelection
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <div className="flex flex-col space-y-4 mt-4">
            <Canvas
              product={selectedProduct}
              color={productColor}
              orientation={orientation}
            />
            <div className="flex justify-between items-center">
              <ColorPalette setProductColor={setProductColor} />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setOrientation(orientation === 'front' ? 'back' : 'front')}
              >
                Toggle Orientation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

