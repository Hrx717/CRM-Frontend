import React from 'react'
import Entry from './pages/Entry'
import DefaultLayout from './pages/DefaultLayout'
import {DashBoard} from './pages/DashBoard'
import { AddTicket } from './pages/AddTicket'


const App = () => {
  return (
    <div>
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <DashBoard/> */}
        <AddTicket/>
      </DefaultLayout>
    </div>
  )
}

export default App