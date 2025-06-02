import React from 'react'

const BuyInstruction = () => {
  const cardInfo = [
    {step: "Step #1", title: "Add to your cart", description: "Select the products you want to add to your cart. You can check it by clicking the cart icon."},
    {step: "Step #2", title: "Fill in your information", description: "In the checkout step, provide the Shipping and Billing information. You can also directly sign up with Facebook or Google."},
    {step: "Step #3", title: "Make Payment", description: "Select your preferred option for Payment from fonePay, Cash on Delivery or Khalti."},
    {step: "Step #4", title: "Receive Order", description: "Wait for the delivery of your order."}
  ]
  return (
    <div className='text-center flex flex-col gap-8'>
      <p className='font-bold text-2xl mt-8'>How to order from S&S online pooja pasal</p>
      <p>It's easy to order your puja samagri from our site. Just follow the steps below.</p>
      <div className='relative flex flex-col gap-6 p-16'>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-red-400"></div>
        <div className="absolute top-25 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500"></div>
        <div className="absolute top-70 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500"></div>
        <div className="absolute top-115 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500"></div>
        <div className="absolute top-160 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500"></div>
        {
          cardInfo.map((card, index)=> (
            <div className={`flex ${index % 2 === 0 ? 'justify-start mr-20' : 'justify-end ml-20'}`}>
              <div className='flex flex-col gap-4 bg-red-100 shadow-lg p-4 rounded-md w-1/2 text-left relative'>
                <div className={`flex p-2 bg-red-500 absolute top-0  ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>{card.step}</div>
                <p className='font-bold mt-8'>{card.title}</p>
                <p>{card.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BuyInstruction
