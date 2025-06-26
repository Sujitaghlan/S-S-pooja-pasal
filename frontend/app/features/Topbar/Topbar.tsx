import React from 'react'
import ContactInfo from './ContactInfo'
import Logo from './Logo'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'



const Topbar = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <ContactInfo />
      <Logo />
      <Navbar />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Topbar
