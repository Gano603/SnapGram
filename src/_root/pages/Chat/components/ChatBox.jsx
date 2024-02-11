import React from 'react'
import ChatCard from './ChatCard'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatArea from './ChatArea'

const ChatBox = () => {

  return (
    <div className='flex flex-col justify-between h-screen'>
        <ChatHeader />
        <ChatArea />
        <ChatInput />
    </div>
  )
}

export default ChatBox