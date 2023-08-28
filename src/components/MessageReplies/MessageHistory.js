import React from 'react';
import './styles/MessageHistory.css';

export const MessageHistory = ({msg}) => {
  if(!msg) return null;
  return (
    msg.map((row, i) => (
      <div key={i} className='message-history mt-4'>
        <div className='send fw-semibold text-secondary'>
        <div className='sender'>{row.sender}</div>
        <div className='date'>{new Date(row.msgAt).toLocaleString()}</div>
        </div>
        <div className='message'>{row.message}</div>
      </div>
    ))
  )
}