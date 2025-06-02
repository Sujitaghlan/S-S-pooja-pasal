import React, { useState } from 'react'
import products from 'app/data/products.json'
import { Card } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";
import ViewProduct from './ViewProduct';

interface Product {
  id: number;
  name: string;
  price: string;
  quantity: string;
  image: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const viewProduct = (product:Product) => {
    console.log("Product clicked:", product);
    setIsOpen(true);
    setSelectedProduct(product);
  }
  
  console.log("dd", selectedProduct);
  return (
    <div className='flex flex-col gap-4 p-2'>
      <p className='text-center font-bold text-3xl p-2'><span className='text-red-500'>Featured</span> Products</p>
      <div className='flex justify-end '>
        <button className='border-2 border-red-500 p-1 pl-4 pr-4 hover:bg-red-500 hover:text-white'>View All</button>
      </div>
      <div className='flex gap-2'>
        {
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
          ))
        }
      </div>
      {isOpen && selectedProduct ? (
  <>
    {console.log("Rendering ViewProduct with:", selectedProduct)}
    <ViewProduct selectedProduct={selectedProduct} />
  </>
) : null}
    </div>
  )
}

export default Products
