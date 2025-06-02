import React from 'react'
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className='flex items-center justify-around bg-red-200 p-2'>
      <div className='flex items-center gap-1'>
        <IoIosMail />
        <a href="mailto:sujitaghlan7@gmail.com">sujitaghlan7@gmail.com</a>
      </div>
      <p className='font-bold'>तामाङ पूजामा प्रयोग हुने सम्पूर्ण सामानहरू</p>
      <div className='flex items-center gap-1'>
        <IoCall />
        <a href="tel:+9779841863932">9841863932</a>
      </div>
    </div>
  )
}

export default ContactInfo
