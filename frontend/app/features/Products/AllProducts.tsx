import React from 'react'
import products from 'app/data/products.json'
import { Card } from 'flowbite-react'
import { FaShoppingCart } from 'react-icons/fa'

const AllProducts = () => {
  return (
    <div className='px-8'>
      <div className='grid lg:grid-cols-3 gap-4'>
        {
          products.length>0?
          products.map((product, index) => (
            <Card
            key={product.id}
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={product.image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {product.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
         {product.price}
        </p>
        <div className='flex gap-2 border-2 border-red-500 items-center justify-center p-2 cursor-pointer hover:bg-red-500 hover:text-white'>
          <FaShoppingCart />
          <button onClick={() => viewProduct(product)}>Add to Cart</button>
        </div>
      </Card>
          )):<p className='text-2xl font-bold'>No products found</p>
        }
      </div>
    </div>
  )
}

export default AllProducts
