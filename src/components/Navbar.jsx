import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import uefalogo from '../assets/uefalogo.png'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <div onClick={handleNav} className={logo ? 'hidden' : 'block'}><img src={uefalogo} className='w-28 mt-8'></img></div>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>History</li>
        <li>Champions</li>
        <li>Best players</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-white left-0 top-0 w-full bg-blue-800 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>UEFA Champions League</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>History</li>
          <li className='border-b'>Champions</li>
          <li className='border-b'>Best players</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
