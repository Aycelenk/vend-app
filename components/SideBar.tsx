import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { BiSolidReceipt, BiSolidPurchaseTag, BiSolidHome } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { ImStatsBars, ImWrench } from 'react-icons/im';
import {  HiArchiveBoxArrowDown } from 'react-icons/hi2';
import { FaCog } from 'react-icons/fa';
interface SideBarProps {
  
  children: ReactNode;
}

const SideBar = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className='flex bg-black'>
      <div className='w-[280px] h-screen bg-[#e7e5e8] border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col mt-4 w-full'>
          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
    currentPath === '/HomePage' ? 'bg-[#fff] text-[#3f32f5]  ' : ''
  }`}>
            <Link href='/HomePage'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <BiSolidHome size={20} /> Home
              </div>
            </Link>
            
          </div>

          <span className='border-b-[2px] border-gray-300 py-[8px] ml-4 w-[25px]'></span>
          
          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
              currentPath === '/Sell' ? 'bg-[#fff] text-[#3f32f5]' : ''
                  }`}>
            <Link href='/Sell'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <FaCartShopping size={20} /> Sell
              </div>
            </Link>
          </div>

          <span className='border-b-[2px] border-gray-300 py-[8px] ml-4 w-[25px]'></span>

          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
                currentPath === '/SalesLedger' ? 'bg-[#fff] text-[#3f32f5]' : ''
                  }`}>
            <Link href='/SalesLedger'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <BiSolidReceipt size={20} /> Sales History
              </div>
            </Link>
          </div>

                    <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
              currentPath === '/Reporting' ? 'bg-[#fff] text-[#3f32f5]' : ''
            }`}>
            <Link href='/Reporting'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <ImStatsBars size={20} /> Reporting
              </div>
            </Link>
          </div>

          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
                  currentPath === '/Catalog' ? 'bg-[#fff] text-[#3f32f5]' : ''
                }`}>
            <Link href='/Catalog'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <BiSolidPurchaseTag size={20} /> Catalog
              </div>
            </Link>
          </div>

          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
              currentPath === '/Services' ? 'bg-[#fff] text-[#3f32f5]' : ''
            }`}>
            <Link href='/Services'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <ImWrench size={20} /> Services
              </div>
            </Link>
          </div>

          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
              currentPath === '/Inventory' ? 'bg-[#fff] text-[#3f32f5]' : ''
            }`}>
            <Link href='/Inventory'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <HiArchiveBoxArrowDown size={20} /> Inventory
              </div>
            </Link>
          </div>

          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
              currentPath === '/Customers' ? 'bg-[#fff] text-[#3f32f5]' : ''
            }`}>
            <Link href='/Customers'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <BsFillPeopleFill size={20} /> Customers
              </div>
            </Link>
          </div>

          <div className={`bg-white-100 hover:bg-[#fff] flex items-center justify-between p-2 font-small ${
            currentPath === '/Setup' ? 'bg-[#fff] text-[#3f32f5]' : ''
              }`}>
            <Link href='/Setup'>
              <div className='flex items-center gap-x-4 ml-2 h-8'>
                <FaCog size={20} /> Setup
              </div>
            </Link>
          </div>

         
        </div>
      </div>

      <main className='w-full ml-0 mt-0'>{children}</main>
    </div>
  );
};

export default SideBar;
