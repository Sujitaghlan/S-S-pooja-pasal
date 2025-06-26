import { Card } from 'flowbite-react'
import React from 'react'

interface Product {
  id: number;
  name: string;
  price: string;
  quantity: string;
  image: string;
}

interface ViewProductProps {
  selectedProduct: Product; 
}

const ViewProduct: React.FC<ViewProductProps> = ({ selectedProduct }) => {
  console.log("ss", selectedProduct);
  if (!selectedProduct) {
    console.error("No product selected!");
    return null;
  }
  return (
    <div className="mt-4 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card
        className="max-w-sm flex"
        imgAlt={selectedProduct.name}
        imgSrc={selectedProduct.image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {selectedProduct.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {selectedProduct.price}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Quantity: {selectedProduct.quantity}
        </p>
      </Card>
    </div>
  )
}

export default ViewProduct