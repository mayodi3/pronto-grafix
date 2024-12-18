"use client"

import { useCallback } from 'react'

const useCanvasDrawing = () => {
  const drawProduct = useCallback((
    ctx: CanvasRenderingContext2D,
    product: string,
    color: string,
    orientation: string
  ) => {
    if (typeof window !== 'undefined') { 
      const baseImage = new Image()
      const maskImage = new Image()
      
      baseImage.onload = () => {
        maskImage.onload = () => {
          // Preserve dark background
          ctx.fillStyle = '#1f2937' // Tailwind's gray-800
          ctx.fillRect(0, 0, 400, 400)
          
        // Draw the base product image
        ctx.drawImage(baseImage, 0, 0, 400, 400)
        
        // Create a temporary canvas for color overlay
        const tempCanvas = document.createElement('canvas')
        tempCanvas.width = 400
        tempCanvas.height = 400
        const tempCtx = tempCanvas.getContext('2d')
        
        if (tempCtx) {
          // Draw the mask
          tempCtx.drawImage(maskImage, 0, 0, 400, 400)
          
          // Apply color overlay
          tempCtx.globalCompositeOperation = 'source-in'
          tempCtx.fillStyle = color
          tempCtx.fillRect(0, 0, 400, 400)
          
          // Draw the colored mask onto the main canvas
          ctx.drawImage(tempCanvas, 0, 0)
        }
      }
      maskImage.src = `/${product}_${orientation}_mask.png`
    }
    baseImage.src = `/${product}_${orientation}_base.png`
    baseImage.crossOrigin = 'anonymous'
    maskImage.crossOrigin = 'anonymous'
  }
  }, [])

  const drawObjects = useCallback((ctx: CanvasRenderingContext2D, objects: any[], maskImage: HTMLImageElement) => {
    // Create a temporary canvas for the design elements
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = 400
    tempCanvas.height = 400
    const tempCtx = tempCanvas.getContext('2d')
    
    if (tempCtx) {
      // Fill temporary canvas with dark background
      tempCtx.fillStyle = '#1f2937' // Tailwind's gray-800
      tempCtx.fillRect(0, 0, 400, 400)

      // Draw all objects onto the temporary canvas
      objects.forEach((obj) => {
        switch (obj.type) {
          case 'image':
            if (obj.image) {
              tempCtx.drawImage(obj.image, obj.x, obj.y, obj.width, obj.height)
            }
            break
          case 'text':
            tempCtx.font = `${obj.fontSize}px ${obj.font}`
            tempCtx.fillStyle = obj.color
            tempCtx.fillText(obj.text, obj.x, obj.y)
            break
          case 'shape':
            tempCtx.fillStyle = obj.color
            tempCtx.beginPath()
            if (obj.shape === 'circle') {
              tempCtx.arc(obj.x, obj.y, obj.radius, 0, 2 * Math.PI)
            } else if (obj.shape === 'rectangle') {
              tempCtx.rect(obj.x, obj.y, obj.width, obj.height)
            }
            tempCtx.fill()
            break
        }
      })
      
      // Apply the mask to the temporary canvas
      tempCtx.globalCompositeOperation = 'destination-in'
      tempCtx.drawImage(maskImage, 0, 0, 400, 400)
      
      // Draw the masked design onto the main canvas
      ctx.drawImage(tempCanvas, 0, 0)
    }
  }, [])

  return { drawProduct, drawObjects }
}

export default useCanvasDrawing

