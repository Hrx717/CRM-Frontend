import React from 'react'
import './styles/Entry.css'
import Login from '../../components/LoginAndForget/Login'

const Entry = () => {
  return (
    <div className='entry-page bg-info container-fluid'>
        <div className="jumbotron box-shadow">
          <Login/>
        </div>
    </div>
  )
}

export default Entry