import React from 'react'
import Footer from '../components/footer';
import PW from "../assets/sponsors/pw.svg"
import TATA from    "../assets/sponsors/tata.svg"

const sponsors = [
    // {image: PW},
    {image: TATA},
]
const sponsor = ({images}) => {
  return (
    <div className='flex flex-col items-center min-h-screen mt-20'>
        <h1 className='text-7xl font-bold mt-20 mb-10 text-center text-[#061A8B]' style={{fontFamily:"Poppins"}}>Sponsor</h1>
        <div className='bg-gradient-to-b from-[#082AE7] to-[#051672] w-[80%] py-20 rounded-3xl flex flex-col lg:flex-row items-center justify-center gap-10'>
            {sponsors.map((sponsor,idx)=>(
                <div key={idx} className='m-10'>
                    <img src={sponsor.image} alt={`sponsor-${idx}`} className='size-full object-contain'/>
                </div>
            ))}
        </div>
        <div className='w-full '><Footer images={images} /></div>
    </div>
  )
}

export default sponsor