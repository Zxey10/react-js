import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <h1 className='layout__title'>Lorem Ipsum</h1>
      {children}
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default Layout
