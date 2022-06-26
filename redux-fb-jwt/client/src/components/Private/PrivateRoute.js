import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {

  const isAuth = useSelector(state => state.auth.isAuth)  

  return (
    <div>
      <h1>Private Route</h1>
      {isAuth && <Outlet />}
      {!isAuth && <p>Please login</p>}
    </div>
  )
}

export default PrivateRoute
