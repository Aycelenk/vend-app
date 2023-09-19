import React from 'react'
import { BiSolidBell, BiSolidCamera } from 'react-icons/bi'


const Header = () => {
    return (
        <div className='bg-black px-8 '>
            <div className='container mx-auto h-12 flex items-center justify-between  '>
                <div className='bg-black mb-2 mt-2 rounded'>
                    <div className='bg-black mx-2 my-2 '>
                        <a href='/HomePage' className='text-gray-500'>
                            <img width="146" height="25" alt="Dresden Logo" src="data:image/png;base64,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"></img>
                        </a>
                    </div>
                </div>

                <nav className='flex gap-x-8 mx-2 my-2 rounded font-semibold'>
                   
                    <a href="#" className='text-gray-500'>
                        Username
                    </a>

                    <a href="#" className='text-gray-500'>
                        <BiSolidCamera size={30}/>
                    </a>
                    
                    <a href="#" className='text-gray-500'>
                        <BiSolidBell size={30}/>
                    </a>
                    
                </nav>                       
            </div>
        </div>
    )
}

export default Header