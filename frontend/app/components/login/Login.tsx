import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const url = "http://localhost:3000/login";

  const handleChange = (e:any) => {
    setUserCredentials({...userCredentials, [e.target.name]:e.target.value});
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try{
      const res = await axios.post(url, userCredentials);
      console.log("Login successful");
      navigate('/home');
    }catch(err:any){
      if(err.response && err.response.status === 404){
        console.log("User Not Found");
      }
      else if(err.response && err.response.status === 401){
        toast.error("Invalid Password");
      }
    }
  }

  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
      <form action="" method='post' onSubmit={handleSubmit} className='flex flex-col gap-4 w-fit shadow p-8 bg-red-100 rounded'>
        <h1 className='font-bold text-2xl text-center'>S-S Pooja Pasal</h1>
        <input type="email" placeholder='Email' onChange={handleChange} value={userCredentials.email} name='email' className='rounded bg-white p-2 outline-none'/>
        <input type="password" placeholder='Password' onChange={handleChange} value={userCredentials.password} name="password" className='rounded bg-white p-2 outline-none'/>
        <div className='flex justify-center'>
          <button type="submit" className='bg-red-500 text-white w-fit p-2  px-4 rounded '>Login</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login
