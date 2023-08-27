import React from 'react'
import {Navigate} from 'react-router-dom'
import DefaultLayout from '../pages/Layout/DefaultLayout';

const isAuth = true;
const PrivateRoute = ({children}) => {
  return (
    isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" />
  )
}

export {PrivateRoute};