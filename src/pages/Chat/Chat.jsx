import React from 'react'
import './Chat.css'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
       <LeftSideBar/>
       <ChatBox/>
       <RightSideBar/>
</div>
    </div>
  )
}

export default Chat
