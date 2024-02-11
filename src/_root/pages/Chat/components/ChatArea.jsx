import React from 'react'
import ChatPill from './ChatPill'

const ChatArea = () => {
  return (
    <div className='h-full flex flex-col-reverse p-5 '>
        <ChatPill message={"Gello World"} />
        <ChatPill message={"Gello World"} />
        <ChatPill message={"Gello World"} user={true} />
        <ChatPill message={"Gello World"} user={true} />
        <ChatPill message={"Gello World"} />
    </div>
  )
}

export default ChatArea