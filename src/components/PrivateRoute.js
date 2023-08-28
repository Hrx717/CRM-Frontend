import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import DefaultLayout from '../pages/Layout/DefaultLayout';
import {useSelector, useDispatch} from 'react-redux';
import {loginSuccess} from './LoginAndForget/LoginSlice';
import { fetchNewAccessJWT } from '../api/userApi';


const PrivateRoute = ({children}) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state) => state.login);
  useEffect(() => {
    const updateAcessJWT = async () => {
      const result = await fetchNewAccessJWT();
      if(result) {
        dispatch(loginSuccess());
      }
    }

    updateAcessJWT();
    if(sessionStorage.getItem('accessJWT')) {
      dispatch(loginSuccess());
    }
  },[dispatch]);

  return (
    isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" />
  )
}

export {PrivateRoute};