import React from 'react'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
// import Topbar from './components/Topbar'


import {Route , Routes} from 'react-router-dom'



const App = () => {
  return (
    <div className='flex min-h-screen max-w-screen'>
     <Sidebar />
     <Body />
     
    </div>
  )
}

export default App