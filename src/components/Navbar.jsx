import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // Corrected typo and renamed state variable
    const links = [
        { id: 1, link: 'Home' },
        { id: 2, link: 'About' },
        { id: 3, link: 'Portfolio' },
        {id:4, link: 'Tech Stack'},
        { id: 5, link: 'Contact' }
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed'>
            <div>
                <h1 className='text-4xl font-signature ml-4'>Malav</h1>
            </div>

            <ul className='flex mr-5'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hidden sm:inline'><Link to={link} smooth duration={800}>{link}</Link></li> // Corrected CSS class name
                ))}
            </ul>
            <div onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer pr-4 z-10 font-semibold text-gray-500 sm:hidden'>
                {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {isNavOpen && 
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link }) => (
                    <li key={id} className='px-2 cursor-pointer capitalize py-4 text-3xl'><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
                </ul>
            }
        </div>
    );
}

export default Navbar;
