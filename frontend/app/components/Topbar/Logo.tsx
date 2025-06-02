import React from 'react'
import logo from '/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Logo = () => {
  return (
    <div className='flex justify-around items-center'>
      <img src={logo} alt="Logo" className='w-40'/>
      <div className='flex justify-between items-center shadow p-2'>
        <input type="text" placeholder='Search...' className='border-0 outline-none' />
        <CiSearch />
      </div>
      <div className='flex justify-between items-center gap-4'>
        <FaShoppingCart />
        <p>Sign In</p>
      </div>
    </div>
  )
}

export default Logo
