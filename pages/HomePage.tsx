import React from 'react'
import Chart from '../components/Chart'

const HomePage = () => {
  return (
    
    <div className='bg-[#f4f2f5] min-h-screen w-full h-full '> 
      <div className='h-40'>
        <div className='h-full w-2/5 flex justify-center'>
          <div className='flex justify-center' >
            <p className='font-semibold text-4xl p-10 pl-16 ' style={{ fontFamily: 'Calibri' }}> Hi Ayçelen, here’s what’s happening in your stores</p>
          </div>
         </div>
        <div className='h-full w-2/5'></div>
      </div>
      
      <div className='flex justify-center justify-between bg-white h-80'>
        <div className='h-full w-2/5 '>
        <div className='flex justify-center mt-8 '>
          <div className='font-semibold text-2xl ' style={{ fontFamily: 'Helvetica' }}>This is what your day looks like</div>
        </div>
        </div>
        <div className='h-full w-3/5 '>
          <Chart />
        </div>
     
      </div>
      
    </div>
  )
}
export default HomePage