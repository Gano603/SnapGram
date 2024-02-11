import React from 'react'

const ChatPill = ({ message , user}) => {
    return (
        <div className={`flex ${user? "justify-end":"justify-start"}`}>
            <span className={`px-5 py-2 ${user? "bg-blue-500":"bg-light-grey"} my-2 rounded-full w-max`}>{message}</span>
        </div>
    )
}

export default ChatPill