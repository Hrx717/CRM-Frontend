import React, {useState} from 'react'
import './styles/Entry.css'
import Login from '../../components/LoginAndForget/Login'
import ForgetPass from '../../components/LoginAndForget/ForgetPass'

const Entry = () => {
  const [formLoad, setFormLoad] = useState('login');

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  }

  return (
    <div className='entry-page bg-info container-fluid'>
        <div className="jumbotron box-shadow">
          {formLoad==='login' && <Login
          formSwitcher = {formSwitcher}
          />}

          {formLoad==='reset' && <ForgetPass
          formSwitcher={formSwitcher}
          />}
        </div>
    </div>
  )
}

export default Entry