import React from 'react'

const Delivery = () => {
  return (
    <div className='flex flex-col gap-4 p-16'>
      <h3 className='font-bold text-2xl'>Delivery Policy</h3>
      <div>
        <p>Delivery of the products from our website are subjected to the following conditions;</p>
        <ol className='list-decimal text-sm'>
          <li>Delivery is available only inside Kathmandu Valley.</li>
          <li>Delivery is free for purchase of above Rs.2,000 and Rs.100 delivery charge for purchase below Rs.2,000/-</li>
        </ol>
      </div>
    </div>
  )
}

export default Delivery
