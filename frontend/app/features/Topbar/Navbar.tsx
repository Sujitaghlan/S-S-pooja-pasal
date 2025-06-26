import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  const menuItems = [
    { label: "ALL PRODUCTS", path: "/product" },
    { label: "DHOOP", path: "/dhoop" },
    { label: "LUNGDAR", path: "/lungdar" },
    { label: "DEATH ITEMS", path: "/deathitems" },
    { label: "KHADA", path: "/khada" },
  ];

  return (
    <div>
       <div className="bg-red-400 flex justify-center gap-10 p-4 text-white font-bold sticky top-0 z-20">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className={`cursor-pointer transition duration-200 ${
            activeIndex === index || location.pathname === item.path
              ? "border-b-4 border-white"
              : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
    <div className='p-8'>
      <Breadcrumb aria-label="Default breadcrumb example">
      <BreadcrumbItem href="/home" icon={HiHome}>
        Home
      </BreadcrumbItem>
      {
        menuItems.map((item, index) => (
          (location.pathname === item.path)?<BreadcrumbItem href={item.path} key={index}>{item.label}</BreadcrumbItem>:""
        ))
      }
      
    </Breadcrumb>
    </div>
    </div>
   
  );
};

export default Navbar;
