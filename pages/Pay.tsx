import React from 'react'
import { useCartStore, Product1 } from '../components/cartStore' ;
import { BsPersonFillAdd } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const Pay = () => {
    const cartItems: Product1[] = useCartStore((state) => state.items);
  const totalPrice: number = useCartStore((state) => state.totalPrice);
  return (


    <div className=' bg-[#f4f2f5]  h-full w-full'>
        <div className=' h-full flex justify-center justify-between'>
            <div className=' w-2/5 h-full  py-8 px-8'>
                <div>
                  
                    <div className='flex items-center gap-x-2'>
                      <Link href='/Sell'>
                        <button className=''>
                          <FaArrowLeft className=' text-2xl' style={{color: 'bg-gray-300'}} />
                        </button>
                      </Link>
                      <div className='font-semibold text-3xl'>
                        Sale
                      </div>
                    </div>
                  
                </div>

                  <div className='mx-6 py-8'>
                  
                    {cartItems.map((item, index) => (
                      <div key={index} className='flex justify-between'>
                        <div >
                          <div className='h-1/5 flex font-bold text-l'>
                            {item.name} 
                          </div>
                          <div className='h-1/5 flex text-sm'>
                            {item.attribute_pa_lens_thickness} {item.attribute_pa_treatment} {item.slug} {item.attribute_pa_stock_type}
                            
                          </div>
                          <div className='h-1/5 flex text-sm'>
                            Frame: {item.frame_size} / {item.frame_color}
                          </div>
                          <div className='h-1/5 flex text-sm mb-4'>
                            Arm: {item.arm_size} / {item.arm_color}
                          </div>
                        </div>
                        <div className='flex justify-end'>
                        ${item.price.toFixed(2)}
                        </div>
                      </div>
                      
                    ))}
                    <span className='border-b-[2px] border-gray-400 py-[8px] ml-4 w-full'></span>
                      <div className='flex justify-between items-center'>
                        <div className='font-semibold text-2xl'>
                          Sale Total 
                        </div>
                        <div>
                          ${totalPrice.toFixed(2)}
                        </div>
                      </div>
                  
                  </div>
                  

            </div>
            <div className=' w-3/5 h-full pr-20 pt-2 '>
               
                <div className='flex flex-wrap  mx-2 mt-4 my-2 bg-white border border-gray-300 h-5/6 rounded'>
                    <div className='flex w-full items-center'>
                        <div className='w-1/2 font-bold text-3xl flex justify-center items-center' style={{ fontFamily: 'Helvetica' }}>Amount to Pay</div>
                        <div className='w-1/2 font-bold text-3xl flex justify-end pr-8' style={{ fontFamily: 'Helvetica' }}>${totalPrice.toFixed(2)}</div>

                    </div>
                    <div className='flex items-center'>
                      <div className='mx-8 '>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Afterpay</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Cash</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Credit Card</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Gift Card</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Gift Up</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Google Pay</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>HICAPS</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Medicare Reclaim</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>NAB</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Other Payment Method</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Other Payment Method 1</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Stripe</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Tyro</button>
                          <button className='bg-blue-700 mx-2 my-2 h-16 w-44 rounded text-white'>Zip</button>
                        </div>
                    </div>
                        <div className=' w-full mx-4'>
                            <div className="relative w-full text-blue-600">
                                <div className="absolute mx-4">
                            
                                </div>
                                <div className='px-2 '>
                                  <div className='flex items-center rounded border border-gray-300'>
                                    <div className='flex justify-center pl-4'>
                                      <BsPersonFillAdd />
                                    </div>
                                    <input
                                        type="text"
                                        className="bg-white-200 h-10 w-full pl-4  text-sm focus:outline-none"
                                        placeholder="Add a customer to pay with the following options:"
                                        
                                    />
                                  </div>
                                </div>
                            </div>
                            <div className='flex '>
                                <button className='bg-gray-400 mx-2 my-2 h-16 w-44 rounded text-white'>Layby</button>
                                <button className='bg-gray-400 mx-2 my-2 h-16 w-44 roundeds text-white'>On Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Pay