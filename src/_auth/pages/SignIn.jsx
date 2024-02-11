import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsLoggedIn } from '../../features/StateSlice';
import axios from 'axios';
import { fetchData } from '../../handlers/handlers';

const SignIn = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [emailError, setemailError] = useState();
  const [passwordError, setpasswordError] = useState();

  const nav = useNavigate();
  const disp = useDispatch();
  const { isLoggedIn } = useSelector(state => state.states)


  const submitHandler = async (e) => {
    e.preventDefault();
    if (!password) {
      setpasswordError("field cannot be empty")
    }
    if (!email) {
      setemailError("field cannot be empty")
    }
    if (password && email) {
      try {
        const res = await axios.post(import.meta.env.VITE_API_URL + 'user/signin', { password, email },
          { withCredentials: true })
        if (res.status === 200) {
          disp(setIsLoggedIn(true))
          fetchData(disp,nav);
          nav('/')
        }
      } catch (error) {
        if(error.response.status === 399){
          setpasswordError(error.response.data.message)
        }
        if(error.response.status === 400 || error.status === 398){
          setemailError(error.response.data.message)
        }
      }
    }
  }
  useEffect(() => {
    const userEmail = document.getElementById('email');
    userEmail.addEventListener('focusout', () => emailChecker(userEmail.value))

    return () => {
      userEmail.removeEventListener('focusout', () => emailChecker(userName.value))
    }
  })

  const emailChecker = async (value) => {
    setemail(value)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) setemailError("Email is not valid")
    else setemailError("")
  }


  return (
    <div className="h-full w-full justify-center flex flex-col items-center px-[20vw]">
      <h1 onClick={() => isLoggedIn ? nav('/') : ""} className='font-pacifico text-5xl my-8 mx-2 cursor-pointer'>Reactgram</h1>
      <h1 className='text-xl my-4'>Sign in to Reactgram</h1>
      <form onSubmit={submitHandler}>
        <div className='relative my-6 flex items-center'>
          <input id='email' className='w-[18rem] xs:w-[24rem] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Email' type="email" />
          <p className='text-sm text-red-600 absolute right-5 inset-y-3'>{emailError}</p>
        </div>
        <div className='relative my-6 flex items-center'>
          <input onChange={(e) => setpassword(e.target.value)} className='w-[18rem] xs:w-[24rem] rounded-xl bg-transparent transition-all border-2 border-gray-600 focus:border-white h-12 outline-none px-4 py-2' placeholder='Password' type="password" />
          <p className='text-sm text-red-600 absolute right-5 inset-y-3'>{passwordError}</p>
        </div>
        <div className='my-4 px-1'>
          <p className='text-sm xs:text-base'>Don't have an account? <Link className='text-blue-800 cursor-pointer hover:underline' to={'/sign-up'}>Create</Link> one now.</p>
        </div>
        <div>
          <button className='px-12 stroke-2 stroke-blue-900 py-2 bg-blue-900 rounded-full'>Log In</button>
        </div>
      </form>
    </div >
  )
}

export default SignIn