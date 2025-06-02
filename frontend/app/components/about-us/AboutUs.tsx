import React from 'react'
import { SiSmartthings } from "react-icons/si";
import { RiPriceTag2Fill } from "react-icons/ri";
import { FaShopSlash } from "react-icons/fa6";
import { FaFirstOrder } from "react-icons/fa";

const AboutUs = () => {
  const aboutus = [
    {
    logo: <SiSmartthings size={40} className="mx-auto text-red-500" />,
    title: "Traditional Tamang Items",
    description: "We specialize in authentic Tamang pooja essentials like khada, lungdar, dhoop, and more — all rooted in our rich culture."
    },
    {
      logo: <RiPriceTag2Fill size={40} className="mx-auto text-red-500" />,
      title: "Affordable & Fair Prices",
      description: "Everything you need for rituals, now at reasonable prices so you can shop without worry."
    },
    {
      logo: <FaShopSlash size={40} className="mx-auto text-red-500" />,
      title: "Locally Trusted Shop",
      description: "Serving the community with honesty and respect — your one-stop destination for spiritual supplies."
    },
    {
      logo: <FaFirstOrder size={40} className="mx-auto text-red-500" />,
      title: "Custom Orders Available",
      description: "Need specific items for a ceremony? We prepare and pack orders based on your rituals and family needs."
    }

];
  return (
    <div className='bg-red-100 py-14'>
      <h2 className='font-bold text-3xl text-center p-4'>About Us</h2>
      <div className='flex'>
        {
          aboutus.map(item => (
            <div className='flex flex-col text-center mt-2 gap-4'>
              {item.logo}
              <h3 className='font-bold'>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default AboutUs
