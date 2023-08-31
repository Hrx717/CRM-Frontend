import React, {useState} from 'react';
import {Container, Row, Col, Form, Button, Spinner, Alert} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {sendPasswordResetOTP} from '../../pages/Password-Reset/PasswordAction'

const ForgetPass = () => {
  const dispatch = useDispatch();
  const {isLoading, status, message} = useSelector((state) => state.passwordReset)
  const [email, setEmail] = useState('');
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(sendPasswordResetOTP(email));
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>Reset Password</h1>
          <hr/>
          <Row>
            <Col>
            {message && <Alert variant={status==='success' ? 'success' : 'danger'}>{message}</Alert>}
            </Col>
          </Row>
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
              type='emial'
              name='email'
              onChange={handleOnChange}
              value={email}
              placeholder='Enter Email'
              required
              />
            </Form.Group>

            <Button type='submit' className='mt-3'>Reset</Button>
            {isLoading && <Spinner animation='border'/>}
            <hr/>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgetPass