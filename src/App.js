import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Entry from './pages/Entry'
import {DashBoard} from './pages/DashBoard'
import { AddTicket } from './pages/AddTicket'
import { TicketList } from './pages/TicketList'
import { SingleTicketView } from './pages/SingleTicketView'
import {PrivateRoute} from './components/PrivateRoute'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route exact path='/' element={<Entry/>} />
        </Routes>
        <Routes>
            <Route path='/dashboard' element={<PrivateRoute children={<DashBoard/>}/>} />
            <Route path='/add-ticket' element={<PrivateRoute children={<AddTicket/>}/>} />
            <Route path='/tickets' element={<PrivateRoute children={<TicketList/>}/>}/>
            <Route path='/ticket/:id' element={<PrivateRoute children={<SingleTicketView/>}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App