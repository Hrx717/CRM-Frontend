import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import DefaultLayout from '../pages/Layout/DefaultLayout';
import {useSelector, useDispatch} from 'react-redux';
import {loginSuccess} from './LoginAndForget/LoginSlice';
import { fetchNewAccessJWT } from '../api/userApi';
import {getUserProfile} from '../pages/Dashboard/userAction'


const PrivateRoute = ({children}) => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state) => state.login);
  const {user} = useSelector((state) => state.user);
  useEffect(() => {
    const updateAcessJWT = async () => {
      const result = await fetchNewAccessJWT();
      if(result) {
        dispatch(loginSuccess());
      }
    }

    if(!user._id) {
      dispatch(getUserProfile());
    }

    if(!sessionStorage.getItem('accessJWT') && localStorage.getItem('crmSite')) {
      updateAcessJWT();
    }
    
    if(!isAuth && sessionStorage.getItem('accessJWT')) {
      dispatch(loginSuccess());
    }
  },[dispatch, isAuth, user._id]);

  return (
    isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" />
  )
}

export {PrivateRoute};