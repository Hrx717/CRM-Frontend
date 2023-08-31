import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { loginPending, loginSuccess, loginFail } from './LoginSlice';
import {userLogin} from '../../api/userApi';
import {getUserProfile} from '../../pages/Dashboard/userAction'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading,isAuth, error} = useSelector((state) => state.login);
  useEffect(() => {
    (sessionStorage.getItem('accessJWT')) && navigate('/dashboard');
  },[navigate, isAuth]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    if(name==="email") {
      setEmail(value);
    }
    else if(name==="password") {
      setPassword(value);
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password) {
      return alert('enter email and password');
    }

    dispatch(loginPending());
    try {
      const loginUser = await userLogin({email, password});

      if(loginUser.status==='success') {
        dispatch(loginSuccess(loginUser));
        dispatch(getUserProfile());
        navigate("/dashboard");
      }else {
        dispatch(loginFail(loginUser.message));
      }
    }
    catch(error) {
      dispatch(loginFail(error.message));
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr/>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label className='fw-semibold'>Email</Form.Label>
              <Form.Control
              type='email'
              name='email'
              placeholder='Enter Email'
              onChange={handleOnChange}
              value={email}
              required
              />
            </Form.Group>

            <Form.Group className='mt-1'>
              <Form.Label className='fw-semibold'>Password</Form.Label>
              <Form.Control
              type='password'
              name='password'
              placeholder='Enter password'
              onChange={handleOnChange}
              value={password}
              required
              />
            </Form.Group>

            <Button type='submit' className='mt-3'>Login</Button>
            {isLoading && <Spinner variant='primary' animation='border'/>}
          </Form>
          <hr/>
        </Col>
      </Row>

      <Row>
        <Col>
        <a href='/password-reset' className='text-info'>Forget password?</a>
        </Col>
      </Row>

      <Row className='py-4'>
        <Col>
        Are you new here? {'  '}
        <a href='/registration' className='text-info'>Register Now</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;