import React from 'react'
import ChatBox from './components/ChatBox'
import InitialChatBox from './components/InitialChatBox'

const Chat = () => {
  return (
    <div className='w-full'>
        <InitialChatBox />
        <ChatBox />
    </div>
  )
}

export default Chat