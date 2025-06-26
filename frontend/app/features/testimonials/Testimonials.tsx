import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const people = [
    {logo: <RiDoubleQuotesL />, description: "I always buy my pooja items from here. All the products are authentic and fresh. They even helped me choose the right items for a special puja.”", name: "Sujita Ghlan", date: "2025-02-08"},
    {logo: <RiDoubleQuotesL />, description: "I placed an order for a family ritual and received everything on time. The owner is polite and helpful.", name: "Asmita Ghlan", date: "2025-02-08"},
    {logo: <RiDoubleQuotesL />, description: "I always buy my pooja items from here. The shop has everything and the prices are good.", name: "Susmita Ghlan", date: "2025-02-08"},
  ]
  return (
    <div>
      <h3 className='text-center font-bold p-4 text-2xl mt-4'>TESTIMONIALS</h3>
      <div className='grid grid-cols-3 gap-4 m-2'>
        {people.map(item => (
          <div className='flex flex-col items-center text-center gap-4 shadow pt-2 pb-2'>
            <div className='text-4xl text-red-500'>{item.logo}</div>
            <p>{item.description}</p>
            <div>
              <p className='font-bold'>{item.name}</p>
              <p className='text-red-500'>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
