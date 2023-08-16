import React from 'react'
import './styles/MessageHistory.css'

export const MessageHistory = ({msg}) => {
  return (
    <div className='message-history mt-4'>
        <div className='send fw-semibold text-secondary'>
        <div className='sender'>Rahul</div>
        <div className='date'>05:08:2023</div>
        </div>
        <div className='message'>Fix! This issue</div>
    </div>
  )
}