import React from 'react'
import Entry from './pages/Entry'
import DefaultLayout from './pages/DefaultLayout'
import {DashBoard} from './pages/DashBoard'


const App = () => {
  return (
    <div>
      {/* <Entry/> */}
      <DefaultLayout>
        <DashBoard/>
      </DefaultLayout>
    </div>
  )
}

export default App