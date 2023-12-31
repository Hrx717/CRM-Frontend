import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Entry from './pages/Layout/Entry'
import {DashBoard} from './pages/Dashboard/DashBoard'
import { AddTicket } from './pages/Add-ViewTicket/AddTicket'
import { TicketList } from './pages/Tickets-List/TicketList'
import { SingleTicketView } from './pages/Add-ViewTicket/SingleTicketView'
import {PrivateRoute} from './components/PrivateRoute'
import { Registration } from './pages/Registration/Registration';
import PasswordOTPForm from './pages/Password-Reset/PasswordOTPForm';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route exact path='/' element={<Entry/>} />
            <Route exact path='/password-reset' element={<PasswordOTPForm/>} />
            <Route exact path='/registration' element={<Registration/>} />
            <Route exact path='/dashboard' element={<PrivateRoute children={<DashBoard/>}/>} />
            <Route exact path='/add-ticket' element={<PrivateRoute children={<AddTicket/>}/>} />
            <Route exact path='/tickets' element={<PrivateRoute children={<TicketList/>}/>}/>
            <Route exact path='/ticket/:tId' element={<PrivateRoute children={<SingleTicketView/>}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App