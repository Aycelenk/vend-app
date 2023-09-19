import React, { Fragment, useState } from 'react';
import Modal from './Modal';
import { Components, SunComponents, nonPresComponents, Product } from '../Glasses';

interface ProductsProps {
  glasses: Components[];
  sunGlasses: SunComponents[];
  nonPresGlasses: nonPresComponents [];
}

const Products = ({ glasses, sunGlasses, nonPresGlasses }: ProductsProps) => {

  if (!Array.isArray(glasses) || !Array.isArray(sunGlasses) || !Array.isArray(nonPresGlasses)) {
    return null; 
  }
  

  console.log(glasses);
  
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showSunglassesModal, setShowSunglassesModal] = useState(false);
  const [showNonPrescriptionModal, setShowNonPrescriptionModal] = useState(false);

  
  const handleProductClick = ( productType: string) => {
    if (productType === 'Prescription Glasses') {
      
      setShowPrescriptionModal(true);
    } else if (productType === 'Sunglasses') {
      
      setShowSunglassesModal(true);
    } else if (productType === 'Non-Prescription Glasses') {
      
      setShowNonPrescriptionModal(true);
    }
  };
  
  return (
    <Fragment>
      <div className='h-full'>
        <div className='flex '>
        <div className='flex flex-wrap'>
        <div 
        className='bg-[#e7e5e8]  hover:bg-purple-100 w-40 h-32 rounded-lg my-4 mx-4 p-2 mr-1 flex items-center justify-center cursor-pointer'
        onClick={() => handleProductClick('Prescription Glasses')}>
          <h2>Prescription Glasses</h2>
        </div>
        </div>
      
      { (
        <Modal
        isVisible={showPrescriptionModal}
        onClose={() => setShowPrescriptionModal(false)}
        fullproduct={glasses}
        name={'Prescription Glasses'}
      />
      )}
    
      <div className='flex'>
      <div 
        className='bg-[#e7e5e8]  hover:bg-purple-100 w-40 h-32 rounded-lg my-4 mx-4 p-2 mr-1 flex items-center justify-center cursor-pointer'
        onClick={() => handleProductClick('Sunglasses')}>
        <h2>Sunglasses</h2>
        </div>
        
        </div>
      { (
        <Modal
        isVisible={showSunglassesModal}
        onClose={() => setShowSunglassesModal(false)}
        
        fullproduct={sunGlasses}
        name={'Sunglasses'}
      />
      )}
      <div className='flex'>
      <div 
        className='bg-[#e7e5e8]  hover:bg-purple-100 w-40 h-32 rounded-lg my-4 mx-4 p-2 mr-1 flex items-center justify-center cursor-pointer'
        onClick={() => handleProductClick('Non-Prescription Glasses')}>
        <h2>Non-Prescription Glasses</h2>
        </div>
        </div>
      
      { (
        <Modal
        isVisible={showNonPrescriptionModal}
        onClose={() => setShowNonPrescriptionModal(false)}
       
        fullproduct={nonPresGlasses}
        name={'Non-Prescription Glasses'}
      />
      )}
      </div>
    </div>
    </Fragment>
  );
};

export default Products;
