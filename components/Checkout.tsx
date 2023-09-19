import React, { useState } from 'react';
import { Components } from '../Glasses';
import { useCartStore, Product1 } from './cartStore';
import Link from 'next/link';
import { BsFillTrash3Fill } from 'react-icons/bs';

interface CheckoutProps {
  fullproduct: Components[];
}

const Checkout = () => {
  const cartItems: Product1[] = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const cartStore = useCartStore(); 

  const [discountType, setDiscountType] = useState<'amount' | 'percentage' | null>(null);
  const [discountValue, setDiscountValue] = useState<number>(0);

  const applyDiscount = () => {
    if (discountType === 'amount') {
      const newTotalPrice = cartStore.totalPrice - discountValue;
      cartStore.setTotalPrice(Math.max(newTotalPrice, 0));
    } else if (discountType === 'percentage') {
      const discountAmount = (discountValue / 100) * cartStore.totalPrice;
      const newTotalPrice = cartStore.totalPrice - discountAmount;
      cartStore.setTotalPrice(Math.max(newTotalPrice, 0));
    }
  };

  return (
    <div className='bg-white h-full border border-gray-200 rounded-lg mr-4'>
      <ul className='border border-gray-200 h-2/3'>
        <div className=''>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div className='flex-col flex justify-center  h-24 w-full border border-gray-200'>
                <div className='flex h-full mx-4 mt-2'>
                  <div className='h-5/6 w-4/5 '>
                    <div className='h-1/5 flex mb-2 font-bold text-l'>
                      {item.name} 
                    </div>
                    <div className='h-1/5 flex text-sm'>
                      {item.attribute_pa_lens_thickness} {item.attribute_pa_treatment} {item.slug}  {item.attribute_pa_stock_type}
                    </div>
                    <div className='h-1/5 flex text-sm'>
                      Frame: {item.frame_size} / {item.frame_color}
                    </div>
                    <div className='h-1/5 flex text-sm'>
                      Arm: {item.arm_size} / {item.arm_color} 
                    </div>

                  </div>

                  <div className='h-5/6 w-1/5  flex justify-center'>
                    <div className='flex justify-center '>
                      ${item.price}
                      <button onClick={() => cartStore.deleteFromCart(item.id)}>
                        <BsFillTrash3Fill size={20} />
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </li>
          ))}
        </div>
      </ul>
      
      <div>
        <div>
          <div className='flex flex-wrap my-3 items-center justify-center'>
            <div className={`bg-[#e7e5e8] hover:bg-blue-100 w-32 p-2 mr-4 rounded-lg flex items-center justify-center cursor-pointer ${discountType === 'amount' ? 'bg-blue-100' : ''}`} onClick={() => setDiscountType('amount')}>
              Discount by amount
            </div>
            <div className={`bg-[#e7e5e8] hover:bg-blue-100 w-32 p-2 mr-4 rounded-lg flex items-center justify-center cursor-pointer ${discountType === 'percentage' ? 'bg-blue-100' : ''}`} onClick={() => setDiscountType('percentage')}>
              Discount by percentage
            </div>
            <button className='flex justify-end bg-[#e7e5e8] hover:bg-blue-100 p-2 mt-2 mr-2 ml-2 rounded-lg flex items-center justify-center cursor-pointer' 
              onClick={clearCart}>
        Clear Cart
      </button>
          </div>
          {discountType !== null && (
            <div className='flex flex-wrap my-3 items-center justify-center'>
              <input
                type="number"
                placeholder={`Enter ${discountType === 'amount' ? 'amount' : 'percentage'}`}
                value={discountValue}
                onChange={(e) => setDiscountValue(parseFloat(e.target.value))}
                className='border border-gray-300 rounded-lg p-2 mr-4'
              />
              <button
                className='bg-blue-100 hover:bg-blue-200 p-2 rounded-lg cursor-pointer'
                onClick={applyDiscount}
              >
                Apply Discount
              </button>
            </div>
          )}
          <div>
            <div>
              <div className='flex justify-between mr-4 ml-4'>
                <div>Discount</div>
                <div>${discountValue.toFixed(2)}</div>
              </div>
              <div className='flex justify-between mt-2 mr-4 ml-4'>
                <div>Tax</div>
                <div>$0.00</div>
              </div>
            </div>
            <div>
              <div className='flex justify-between bg-[#e7e5e8] hover:bg-blue-100 p-2 mt-2 mr-2 ml-2 rounded-lg flex items-center justify-center cursor-pointer'>
                <div className='ml-2'>
                  <Link href='/Pay'>
                    Pay {cartStore.totalItems} items
                  </Link>
                  </div>
                <div>${cartStore.totalPrice.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
