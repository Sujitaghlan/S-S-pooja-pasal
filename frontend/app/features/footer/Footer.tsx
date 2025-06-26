import React from 'react'
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='mt-8'>
      <div className='bg-red-100 p-16 grid grid-cols-5'>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>S&S Pooja Pasal</h3>
          <div className='opacity-70'>
            <p>Call Us at</p>
            <a href='tel:+977 9841863932' className='hover:text-red-500'>+977 9841863932</a>
          </div>
          <div className='opacity-70'>
            <p>Reach Us at</p>
            <div className='flex items-center'>
              <FaViber />
              <FaWhatsappSquare />
              <a className='hover:text-red-500'>+977 9848069087</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>Help Center</h3>
          <div className='flex flex-col opacity-70'>
            <Link to="/buyInstruction" className='hover:text-red-500'>How to buy</Link>
            <Link to="/deliveryPolicy" className='hover:text-red-500'>Delivery</Link>
            <Link to="/returnPolicy" className='hover:text-red-500'>Make a return</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>Account</h3>
          <Link to="/" className='opacity-70 hover:text-red-500'>My Account</Link>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>About Us</h3>
          <div className='flex flex-col opacity-70'>
            <Link to="/about" className='hover:text-red-500'>About Us</Link>
            <Link to="/contact" className='hover:text-red-500'>Contact Us</Link>
            <Link to="/" className='hover:text-red-500'>Privacy Policy</Link>
            <Link to="/" className='hover:text-red-500'>Terms of Use</Link>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>Connect With Us</h3>
          <div className='flex opacity-70 text-4xl gap-2'>
            <Link to="/" className='hover:text-red-500'><CiFacebook /></Link>
            <Link to="/" className='hover:text-red-500'><FaInstagram /></Link>
          </div>
        </div>
      </div>
      <div className='text-center p-4 bg-red-200 font-bold'>CopyRight 2025 &#169;S&S Pooja Pasal</div>
    </div>
    
  )
}

export default Footer
