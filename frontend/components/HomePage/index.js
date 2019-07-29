import React, { useState } from 'react'
import io from 'socket.io-client'
import { chat as Chat } from './chat'
const socket = io.connect('http://localhost:8000')


export const HomePage = (props) => {
  const [noti, setNoti] = useState([])

  const handleChat = (event) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      message: event.target.message.value
    }
    socket.emit('sendMessage', data)
  }

  socket.on('boardCastMessage', data => {
    setNoti([...noti, data])
  })
  socket.on('login_notification', data => {
    setNoti([...noti, data])
  })
  socket.on('user_disconnected', data => {
    setNoti([...noti, data])
  })

  return (
    <>
      <div>
        <Chat handleChat={handleChat} />
        {noti.map((value, index) => {
          return (<p>{value}</p>)
        })}
      </div>
    </>
  )
}