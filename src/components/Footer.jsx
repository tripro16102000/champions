import React from 'react';
import uefalogo from '../assets/uefalogo.png'

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const footerBackground = {
    backgroundImage: 'url("https://i.pinimg.com/originals/4c/c1/de/4cc1de92542efc930dccb6bf4bc95927.jpg")'
  }
  return (
    <div style={footerBackground} className='w-full py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
        <img src={uefalogo} className='w-28 mt-8'></img>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between text-white'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Videos</li>
            <li>Contact</li>
            <li>TV shows</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>History</li>
            <li>Champions</li>
            <li>Best players</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
