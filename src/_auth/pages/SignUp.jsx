import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  const [email,setemail] = useState();
  const [name,setname] = useState();
  const [phone,setphone] = useState();
  const [password,setpassword] = useState();
  const [cpassword,setcpassword] = useState();

  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email,name,phone,password,cpassword)
  }

  return (
    <div className="h-full w-full justify-center flex flex-col items-center px-[20vw]">
      <img className='w-64 cursor-pointer' onClick={()=>nav('/')} src="/assets/images/logo.svg" alt="SnapGram Logo" />
      <h1 className='text-xl font-semibold my-4'>Sign in to SnapGram</h1>
      <form onSubmit={submitHandler}>
        <div className='relative my-6'>
          <input onChange={(e) => setemail(e.target.value)} className='w-[20vw] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Email' type="email" />
        </div>
        <div className='relative my-6'>
          <input onChange={(e) => setname(e.target.value)} className='w-[20vw] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Name' type="text" />
        </div>
        <div className='relative my-6'>
          <input onChange={(e) => setphone(e.target.value)} className='w-[20vw] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Phone' type="tel" />
        </div>
        <div className='relative my-6'>
          <input onChange={(e) => setpassword(e.target.value)} className='w-[20vw] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Password' type="password" />
        </div>
        <div className='relative my-6'>
          <input onChange={(e) => setcpassword(e.target.value)} className='w-[20vw] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Confirm Password' type="password" />
        </div>
        <div>
          <button className='px-12 stroke-2 stroke-blue-900 py-2 bg-blue-900 rounded-full'>Log In</button>
        </div>
      </form>
    </div >)
}

export default SignUp