import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsLoggedIn } from '../../features/StateSlice';
import { fetchData } from '../../handlers/handlers';

const SignUp = () => {

  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();
  const [emailError, setemailError] = useState();
  const [IdError, setIdError] = useState();
  const [nameError, setnameError] = useState();
  const [passwordError, setpasswordError] = useState();
  const [cpasswordError, setcpasswordError] = useState();

  const nav = useNavigate();
  const disp = useDispatch();
  const { isLoggedIn } = useSelector(state => state.states);

  const submitHandler = async(e) => {
    e.preventDefault();
    if(!password){
      setpasswordError("field cannot be empty")
    }
    if(!cpassword){
      setcpasswordError("field cannot be empty")
    }
    if(!name){
      setnameError("field cannot be empty")
    }
    if(!username){
      setIdError("field cannot be empty")
    }
    if(!email){
      setemailError("field cannot be empty")
    }
    if(password !== cpassword){
      setpasswordError("passwords do not match")
      setcpasswordError("passwords do not match")
    }
    if(password && cpassword && email && username && name){
      setpasswordError("");
      setcpasswordError("")
      const res = await axios.post(import.meta.env.VITE_API_URL+'user/signup',{password,email,id:username,name},
      {withCredentials:true})

      if(res.status===200) {
        disp(setIsLoggedIn(true))
        fetchData(disp,nav);
        nav('/')
      }
  }
}

  useEffect(()=>{
    const userName = document.getElementById('username');
    const userEmail = document.getElementById('email');
    userName.addEventListener('focusout',()=>usernameChecker(userName.value))
    userEmail.addEventListener('focusout',()=>emailChecker(userEmail.value))

    return ()=>{
      userName.removeEventListener('focusout',()=>usernameChecker(userName.value))
      userEmail.removeEventListener('focusout',()=>emailChecker(userName.value))
    }
  })

  const emailChecker = async(value) =>{
    setemail(value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(value)) setemailError("Email is not valid")
    else {
      setemailError("")
      const res = await axios.post(import.meta.env.VITE_API_URL+'user/checkEmail',{email:value});
      if(res.status===201) setemailError(res.data.message)
    
    }
  }

  const usernameChecker = async (value)=>{
    setusername(value)
    if(value.length < 3) setIdError("username is too small")
    else {
      setIdError('')
      const res = await axios.post(import.meta.env.VITE_API_URL+'user/checkId',{id:value});
      if(res.status===201) setIdError(res.data.message)    
    }
  }

  return (
    <div className="h-full w-full justify-center flex flex-col items-center px-[20vw]">
      <h1 onClick={() => isLoggedIn ? nav('/') : ""} className='font-pacifico text-5xl my-8 mx-2 cursor-pointer'>Reactgram</h1>
      <h1 className='text-xl font-semibold my-4'>Sign in to SnapGram</h1>
      <form onSubmit={submitHandler}>
        <div className='relative my-6 flex items-center'>
          <input id='email' className='w-[18rem] xs:w-[24rem] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Email' type="email" />
          <p className='text-sm text-red-600 absolute right-5 inset-y-3'>{emailError}</p>
        </div>
        <div className='relative my-6 flex items-center'>
          <input onChange={(e) => setname(e.target.value)} className='w-[18rem] xs:w-[24rem] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Name' type="text" />
          <p className='text-sm text-red-600 absolute right-5 inset-y-3'>{nameError}</p>
        </div>
        <div className='relative my-6 flex items-center'>
          <input id='username' className='w-[18rem] xs:w-[24rem] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Username' type="text" />
          <p className='text-sm text-red-600 absolute right-5 inset-y-3'>{IdError}</p>
        </div>
        <div className='relative my-6 flex items-center'>
          <input onChange={(e) => setpassword(e.target.value)} className='w-[18rem] xs:w-[24rem] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Password' type="password" />
          <p className='text-sm text-red-600 absolute right-5 inset-y-3'>{passwordError}</p>
        </div>
        <div className='relative my-6 flex items-center'>
          <input onChange={(e) => setcpassword(e.target.value)} className='w-[18rem] xs:w-[24rem] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Confirm Password' type="password" />
          <p className='text-sm text-red-600 absolute right-5 inset-y-3'>{cpasswordError}</p>
        </div>
        <div className='my-4 px-1'>
          <p className='text-sm xs:text-base'>Already have an account? <Link className='text-blue-800 cursor-pointer hover:underline' to={'/sign-in'}>Sign up</Link> now.</p>
        </div>
        <div>
          <button className='px-12 stroke-2 stroke-blue-900 py-2 bg-blue-900 rounded-full'>Create Account</button>
        </div>
      </form>
    </div >)
}

export default SignUp