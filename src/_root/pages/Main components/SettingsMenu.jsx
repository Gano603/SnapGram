import { AnimatePresence, motion } from 'framer-motion'
import { setIsLoggedIn } from '../../../features/StateSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { settingMenuAnim } from '../animation'
import axios from 'axios'
import { setData } from '../../../features/userSlice'
import { useNavigate } from 'react-router-dom'

const SettingsMenu = () => {

  const { isSettingMenuOpen } = useSelector(state => state.states);
  const disp = useDispatch();
  const nav = useNavigate();

  const logoutHandler = async() =>{
    await axios.get(import.meta.env.VITE_API_URL+'user/signout',{
      withCredentials:true
    })
    .then(()=>{
      disp(setIsLoggedIn(false));
      disp(setData({}))
      nav('/sign-in')
    })
  }

  return (
    <AnimatePresence>
      {isSettingMenuOpen && <motion.div
        variants={settingMenuAnim}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        className='absolute bg-light-grey bottom-0 left-0 w-full flex flex-col items-center'>
        <div className='bg-light-grey rounded-lg flex flex-col items-center w-full border-t-light-grey border-t-[1px] hover:bg-white hover:bg-opacity-10'>
          <button onClick={logoutHandler} className='text-red-500 p-4 border-t-[1px'>Logout</button>
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default SettingsMenu