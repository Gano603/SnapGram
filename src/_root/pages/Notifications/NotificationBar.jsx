import React from 'react'
import { useSelector } from 'react-redux';
import { divAnim } from '../animation';
import { motion } from 'framer-motion';
import Notificationfollow from './Notificationfollow';
import NotificationSuggestion from './NotificationSuggestion';


const NotificationBar = () => {

    const { isNotificationOpen } = useSelector(state => state.states);

    return (
        <>
            {isNotificationOpen &&
                <motion.div
                    variants={divAnim}
                    initial={"initial"}
                    animate={"animate"}
                    exit={"exit"}
                    className='border-r-[1px] w-[25rem] absolute h-screen z-10 bg-black border-grey overflow-y-auto'>
                    <div className='px-5'>
                        <h1 className='text-2xl font-bold my-7 mx-1'>Notifications</h1>
                        <div>
                            <span className='font-bold'>New</span>
                            <Notificationfollow id={"fluffyguy"} imgUrl={"/assets/images/profile.png"} />
                            <NotificationSuggestion id1={"fluffyguy"} id2={"ok_boys"} imgUrl={"/assets/images/profile.png"} />
                        </div>
                    </div>
                    <hr className='mt-5 border-grey' />
                </motion.div>}
        </>
    )
}

export default NotificationBar