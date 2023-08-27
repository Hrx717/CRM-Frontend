import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const ForgetPass = ({handleOnChange, handleOnResetSubmit, email, formSwitcher}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Reset Password</h1>
          <hr/>
          <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
              type='emial'
              name='email'
              placeholder='Enter Email'
              onChange={handleOnChange}
              value={email}
              required
              />
            </Form.Group>

            <Button type='submit' className='mt-3'>Reset</Button>
            <hr/>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
        <a href='#!' className='text-info' onClick={() => formSwitcher("login")}>Login now</a>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgetPass