import React from 'react';
// import {Container} from 'react-bootstrap';
import SignUp from '../../components/SignUp/SignUpForm'
import './registration.style.css';

export const Registration = () => {
  return (
    <div className='registration-page bg-info'>
        <div className='form-box bg-light'>
            <SignUp/>
        </div>
    </div>
  )
}
