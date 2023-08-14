import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const Login = ({handleOnChange, handleOnSubmit, emial, pass, formSwitcher}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr/>
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
              type='emial'
              name='email'
              placeholder='Enter Email'
              onChange={handleOnChange}
              value={emial}
              required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
              type='password'
              name='password'
              placeholder='Enter password'
              onChange={handleOnChange}
              value={pass}
              required
              />
            </Form.Group>

            <Button type='submit' className='mt-3'>Login</Button>
            <hr/>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
        <a href='#!' className='text-info' onClick={() => formSwitcher("reset")}>forget password?</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Login