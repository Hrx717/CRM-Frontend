import React from 'react';
import './passwordOtp.style.css';
import {useSelector} from 'react-redux';
import ForgetPass from '../../components/LoginAndForget/ForgetPass';
import UpdatePassword from './UpdatePasswordForm';

const PasswordOTPForm = () => {
  const {showOtpForm} = useSelector((state) => state.passwordReset);
  return (
    <div className='entry-page bg-info container-fluid'>
        <div className="jumbotron box-shadow">
          {showOtpForm ? <UpdatePassword/> : <ForgetPass/> }
          <a href='/' className='text-info'>Login Now</a>
        </div>
    </div>
  )
}

export default PasswordOTPForm;