import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Colors} from '../Glasses'

interface HomeProps {
  col: Colors[],

}

{/* 
export const getServerSideProps: GetServerSideProps <HomeProps> =  async () => {
  const response = await fetch("https://wc-api.dresden.vision/wc/glasses/non-prescription-glasses");
  const colorsResponse: ColorsResponse = await response.json();
  return {
    props: { col: colorsResponse.colors }
  }
}
*/}


export default function Home({col} : HomeProps) {
  return (
    <>
      <Head>
        <title>Vend</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#f4f2f5] min-h-screen'>
        <div >
          <div className='flex justify-center'>index</div>

        </div>
        
      </main>
    </>
  )
}