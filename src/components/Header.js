import React from 'react'
import '../styles/Header.css'
import logo from '../assests/logo3.png'

export const Header = () => {
  return (
    <div className='navbar'>
      <img className='logo-img' src={logo} alt='logo' />
      <label className='logo'>CRM</label>
      <ul className='links'>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Tickets</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
        
  )
}