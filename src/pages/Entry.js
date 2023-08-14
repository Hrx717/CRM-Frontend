import React, {useState} from 'react'
import './Entry.css'
import Login from '../components/Login'
import ForgetPass from '../components/ForgetPass'

const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    if(name==="email") {
      setEmail(value);
    }
    else if(name==="password") {
      setPassword(value);
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      return alert('enter email and password');
    }
    console.log(email, password)
  }

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if(!email) {
      return alert('enter email');
    }
    console.log(email)
  }

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  }
  
  return (
    <div className='entry-page bg-info container-fluid'>
        <div className="jumbotron box-shadow">
          {formLoad==='login' && <Login handleOnChange = {handleOnChange}
          handleOnSubmit = {handleOnSubmit}
          email = {email}
          pass = {password}
          formSwitcher = {formSwitcher}
          />}

          {formLoad==='reset' && <ForgetPass handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          email={email}
          formSwitcher={formSwitcher}
          />}
        </div>
    </div>
  )
}

export default Entry