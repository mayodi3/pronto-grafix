'use client';

import useCanvasDrawing from '@/hooks/useCanvas';
import React, { useRef, useEffect, useState } from 'react';

interface CanvasProps {
  product: string;
  color: string;
  orientation: string;
}

interface CanvasObject {
  type: 'image' | 'text' | 'shape';
  x: number;
  y: number;
  width?: number;
  height?: number;
  image?: HTMLImageElement;
  text?: string;
  font?: string;
  fontSize?: number;
  color?: string;
  radius?: number;
  shape?: 'circle' | 'rectangle';
}

const Canvas: React.FC<CanvasProps> = ({ product, color, orientation }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasObjects, setCanvasObjects] = useState<CanvasObject[]>([]);
  const { drawProduct, drawObjects } = useCanvasDrawing();
  const maskImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill canvas with dark background
    ctx.fillStyle = '#1f2937'; // Tailwind's gray-800
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const maskImage = new Image();
    maskImage.onload = () => {
      maskImageRef.current = maskImage;
      drawProduct(ctx, product, color, orientation);
      drawObjects(ctx, canvasObjects, maskImage);
    };
    maskImage.src = `/${product}_${orientation}_mask.png`;
    maskImage.crossOrigin = 'anonymous';
  }, [product, color, orientation, canvasObjects, drawProduct, drawObjects]);

  const addImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setCanvasObjects([
          ...canvasObjects,
          {
            type: 'image',
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            image: img,
          },
        ]);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const addShape = (shape: 'circle' | 'rectangle') => {
    setCanvasObjects([
      ...canvasObjects,
      {
        type: 'shape',
        x: 50,
        y: 50,
        shape: shape,
        color: 'red',
        ...(shape === 'circle' ? { radius: 25 } : { width: 50, height: 50 }),
      },
    ]);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border border-gray-700 bg-gray-800"
      />
      <div className="mt-4 space-y-2">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && addImage(e.target.files[0])}
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />
        <button
          onClick={() => addShape('rectangle')}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Rectangle
        </button>
        <button
          onClick={() => addShape('circle')}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Circle
        </button>
      </div>
    </div>
  );
};

export default Canvas;
