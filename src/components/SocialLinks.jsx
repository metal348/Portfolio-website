import React from 'react'
import { FaGithub,FaLinkedin, FaInstagram } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div name="SocialLinks" className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] rounded-tr-md hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500'>
                <a href='https://www.linkedin.com/in/malav-gandhi-7a3884191/' className='flex justify-between items-center w-full  text-white'> LinkedIn <FaLinkedin size={30} /></a>
            </li>
            <li className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500'>
                <a href='https://github.com/metal348?tab=repositories' className='flex justify-between items-center w-full  text-white'> GitHub <FaGithub size={30} /></a>
            </li>
            <li className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500'>
                <a href='mailto:malavgandhi_13@outlook.com' className='flex justify-between items-center w-full  text-white'> Mail <HiOutlineMail size={30} /></a>
            </li>
            <li className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] rounded-br-md hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500'>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className='flex justify-between items-center w-full  text-white'> Resume <BsFillPersonLinesFill size={30} /></a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks