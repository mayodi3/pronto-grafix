"use client"

import React from 'react'

interface ColorPaletteProps {
  setProductColor: (color: string) => void
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ setProductColor }) => {
  const colors = ['white', 'black', 'red', 'blue', 'green', 'yellow']

  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full border border-gray-300`}
          style={{ backgroundColor: color }}
          onClick={() => setProductColor(color)}
        />
      ))}
    </div>
  )
}

export default ColorPalette

