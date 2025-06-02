import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
 import { toast } from 'react-toastify';
import axios from 'axios';
const Register = () => {
  const url = "http://localhost:3000/register";
  const navigate = useNavigate();
  const [data, setData] = useState(
    {name: "",
      email: ""
    });
  
  const notify = () => toast.error("Email registered already");
  
  const handleChange = (e:any) => {
    setData({...data,
      [e.target.name]: e.target.value
  })
  }

    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try{
         const res = await axios.post(url, data, {
          headers: { "Content-Type": "application/json" }
      });

         console.log("Registration successful:", res.data);
         navigate('/login')
      }
      // Redirect or show message if needed
    catch (err:any) {
      if(err.response && err.response.status === 409){
      console.error("Error registering:", err);
      notify();
      }
    }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} method='post' className='flex flex-col gap-4 w-fit shadow p-8 bg-red-100 rounded'>
        <h1 className='font-bold text-2xl text-center'>S-S Pooja Pasal</h1>
        <input type="text" placeholder='Name' name="name" value={data.name} onChange={handleChange} className='rounded bg-white p-2 outline-none' />
        <input type="email" placeholder='Email' name='email' onChange={handleChange} value={data.email} className='rounded bg-white p-2 outline-none'/>
        <div className='flex justify-center'>
          <button type="submit" className='bg-red-500 text-white w-fit p-2  px-4 rounded'>Register</button>
        </div>
        <p className='text-sm'>Already have an account?<Link to="/login"><span className='underline text-red-500'>Login</span></Link></p>
      </form>
    </div>
  )
}

export default Register
