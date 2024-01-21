import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { useSelector } from 'react-redux';
import { divAnim } from '../animation';
import UserCard from '../Home/components/UserCard';

const Search = () => {

    const { isSearchOpen } = useSelector(state => state.states);

    return (
        <>
            {isSearchOpen &&
                <motion.div
                    variants={divAnim}
                    initial={"initial"}
                    animate={"animate"}
                    exit={"exit"}
                    className='border-r-[1px] w-[25rem] absolute h-screen z-10 bg-black border-grey overflow-y-auto'>
                    <div className='px-5'>
                        <h1 className='text-2xl font-semibold my-7 mx-1'>Search</h1>
                        <input className='my-3 px-3 h-9 w-full rounded-md outline-none bg-grey' type="search" placeholder='Search' />
                    </div>
                    <hr className='my-5 border-grey' />
                    <div className='px-5 h-[79.3vh] scroll-none scroll-smooth overflow-y-auto'>
                        <div className='flex justify-between my-3'>
                            <span className='font-semibold'>Recent</span>
                            <button className='text-sm text-blue-400 hover:text-white'>Clear All</button>
                        </div>
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                        <UserCard id={"muhammad.khawar.577"} name={"Muhammad Khawar"} imgUrl={"/assets/images/profile.png"} user={true} search={true} />
                    </div>
                </motion.div>}
        </>
    )
}

export default Search