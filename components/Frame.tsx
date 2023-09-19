import React, { useState } from 'react';
import { Components } from '../Glasses';

interface FrameProps {
  fullproduct: Components[];
  handleColorSelection: (color: string) => void;
  handleSizeSelection: (size: string) => void;
}

const Frame = ({ fullproduct, handleColorSelection, handleSizeSelection }: FrameProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const uniqueColors = Array.from(new Set(fullproduct[0].product.variations.map((prod) => prod.meta.attribute_pa_color)));
  const uniqueSize = Array.from(new Set(fullproduct[0].product.variations.map((prod) => prod.meta.attribute_pa_size)));

  const selectedProduct = fullproduct[0].product.variations.find(
    (prod) =>
      prod.meta.attribute_pa_color === selectedColor &&
      prod.meta.attribute_pa_size === selectedSize
  );

  return (
    <div className='w-[700px] flex flex-row'>
      

      <div className='mt-4'>
        <span className='text-xl'>Frame Color:</span>
        <div className='w-[600px]'>
          {uniqueColors.map((color) => (
            <button
              key={color}
              className={`mx-2 mb-2 px-2 py-1 w-30 h-25 bg-gray-100 hover:bg-purple-200 rounded  ${
                selectedColor === color ? 'bg-purple-300 text-black' : 'bg-gray-200 text-black'
              }`}
              onClick={() => {
                setSelectedColor(color);
                handleColorSelection(color);
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-4'>
        <span className='text-xl'>Frame Size:</span>
        <div className='w-[100px] flex flex-col'>
          {uniqueSize.map((size) => (
            <button
              key={size}
              className={`mx-2 mb-2 px-2 py-1 bg-gray-100 hover:bg-purple-200 rounded ${
                selectedSize === size ? 'bg-purple-300 text-black' : 'bg-gray-200 text-black'
              }`}
              onClick={() => {
                setSelectedSize(size);
                handleSizeSelection(size);
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame;
