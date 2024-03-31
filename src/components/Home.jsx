import React from 'react';
import heroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 text-white'>
        <div className='md:w-1/2 mr-0 md:mr-8 flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold'>
            <span className="text-cyan-500">Hey there !</span> <br /> <p className='pt-2'>I am Malav</p>
          </h2>
          <p className='text-gray-500 py-4 max-w-md text-lg'>
          Hey, glad you stopped by my portfolio! Here, you'll find a collection of my web development and 
          design adventures. Feel free to browse around and discover the projects that keep me passionate 
          about what I do.</p>
          <div>
            <button onClick={() => {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            }} className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={20} className='ml-1' />
              </span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
        <img
            src={heroImage}
            className="rounded-full overflow-hidden mx-auto md:ml-8"
            style={{ boxShadow: '0px 0px 10px rgba(41, 199, 255, 1.2)' }}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
