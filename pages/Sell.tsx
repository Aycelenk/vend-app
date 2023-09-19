import Checkout from '../components/Checkout'
import Products from '../components/Products'
import SearchBar from '../components/SearchBar'
import React from 'react'
import { Colors, Components, GlassesResponse, SunComponents, SunGlassesResponse, nonPresComponents } from '../Glasses'
import { GetServerSideProps } from 'next'

interface HomeProps {
  glasses: Components[];
  colors: Colors[];
  sunGlasses: SunComponents[];
  nonPresGlasses: nonPresComponents[];

}


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const glassesResponse = await fetch("https://wc-api-dev-bedrock.dresden.vision/wc/glasses/prescription-glasses");
  const sunGlassesResponse = await fetch("https://wc-api.dresden.vision/wc/glasses/prescription-sunglasses");
  const nonPresResponse = await fetch("https://wc-api-dev-bedrock.dresden.vision/wc/glasses/non-prescription-glasses");

  const glassesData: GlassesResponse = await glassesResponse.json();
  const sunGlassesData: SunGlassesResponse = await sunGlassesResponse.json();
  const nonPresData: SunGlassesResponse = await nonPresResponse.json();

  return {
    props: { 
      glasses: glassesData.components,
      sunGlasses: sunGlassesData.components,
      nonPresGlasses: nonPresData.components,
      colors: glassesData.colors
    }
  };
};

const Sell = ({glasses, sunGlasses, nonPresGlasses, colors} : HomeProps ) => {
  const components = Object.values(glasses);
  const suncomponents = Object.values(sunGlasses);
  const nonprescomponents = Object.values(nonPresGlasses);
  return (
    <div className='h-full max-w-full bg-[#f4f2f5]'>
      <div className='ml-4 h-full'>
        <div className='h-3/4'>
        <div className='h-8 items-center mb-2'>Search for products/services</div>
   
        <div className="bg-white-200 min-h-full flex flex-row ">
            
            <div className="bg-white-200 w-3/5 min-h-full mr-2 mt-0">
                <SearchBar />
                <Products glasses={components} sunGlasses={suncomponents} nonPresGlasses={nonprescomponents}/>
                
            </div> 

            <div className="w-2/5 ">
              <Checkout />
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
export default Sell