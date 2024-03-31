import React from 'react'
import Bhojanam from '../assets/Bhojanam.png'
import Port from '../assets/Malav.png'
import truecaller from '../assets/truecaller.png'
const Portfolio = () => {
  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
    <div className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={Bhojanam} alt="" className='rounded-md object-cover h-full duration-200 hover:scale-105'/>
        <p className="text-center pt-3 pb-4"><a href="https://github.com/lakshyaaa07/bhojnam-restaurant-web">Restaurant Website</a></p>
    </div>
    <div className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={Port} alt="" className='rounded-md object-cover h-full duration-200 hover:scale-105'/>
        <p className="text-center pt-3 pb-4"><a href="https://github.com/lakshyaaa07/bhojnam-restaurant-web" >Portfolio Website</a></p>
    </div>
    <div className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={truecaller} alt="" className='rounded-md  h-full duration-200 hover:scale-105'/>
        <p className='text-center pt-3 pb-4'><a href="https://github.com/metal348/Truecaller-Web-clone">Truecaller clone</a></p>
    </div>
</div>


        </div>
    </div>
  )
}

export default Portfolio