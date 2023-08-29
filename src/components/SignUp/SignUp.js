import React, {useState} from 'react';
import {Container,Button, Row, Col, Form} from 'react-bootstrap';

const initialState = {
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    password: '',
    confirmPass: ''
}

const passwordError = {
    minLength: true,
    isMatched: true,
    phnlenght: true,
    allCheck: false,
}
const SignUp = () => {
    const [newUser, setNewUser] = useState(initialState);
    const [passwordVerification, setPasswordVerification] = useState(passwordError)

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setNewUser({
            ...newUser, 
            [name]: value
        });

        if(name==='phone') {
            const phnlenght = value.length >7;
            setPasswordVerification({
                ...passwordVerification,
                phnlenght
            });
        }

        if(name==='password') {
            const minLength = value.length > 5;
            setPasswordVerification({
                ...passwordVerification,
                minLength
            });
        }

        if(name==='confirmPass' && value.length > 5) {
            const isMatched = newUser.password === value;
            const allCheck = isMatched && passwordVerification.phnlenght && passwordVerification.minLength;
            setPasswordVerification({
                ...passwordVerification,
                isMatched, allCheck
            });
        }
    }

    return (
        <Container>
            <Row>
                <Col><h1 className='text-center pt-2'>User Registration</h1></Col>
            <hr/>
            </Row>
            <Row className='mt-1 ps-4 pe-3 pb-2'>
                <Col>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label className='fw-semibold'>Full Name:</Form.Label>
                    <Form.Control
                    type='text' name='name' placeholder='Enter Full Name'
                    onChange={handleOnChange}
                    value={newUser.name}
                    required
                    />
                </Form.Group>
    
                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Email address:</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter Email'
                    onChange={handleOnChange}
                    value={newUser.email}
                    required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Phone:</Form.Label>
                    <Form.Control type='number' name='phone' placeholder='Enter Phone No.'
                    minLength='8'
                    onChange={handleOnChange}
                    value={newUser.phone}
                    required
                    />
                </Form.Group>
                {!passwordVerification.phnlenght && <ul><li className='text-info'>Atleast 8-digit phone number</li></ul>}

                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Company:</Form.Label>
                    <Form.Control type='text' name='company' placeholder='Enter Company'
                    onChange={handleOnChange}
                    value={newUser.company}
                    required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Address:</Form.Label>
                    <Form.Control type='text' name='address' placeholder='Enter Address'
                    onChange={handleOnChange}
                    value={newUser.address}
                    required
                    />
                </Form.Group>
    
                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Password:</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password'
                    minLength='6'
                    onChange={handleOnChange}
                    value={newUser.password}
                    required
                    />
                </Form.Group>
                {!passwordVerification.minLength && <ul><li className='text-danger'>Minimum 6 characters</li></ul>}

                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Confirm Password:</Form.Label>
                    <Form.Control type='password' name='confirmPass' placeholder='Confirm password'
                    onChange={handleOnChange}
                    value={newUser.confirmPass}
                    required
                    />
                </Form.Group>
                {!passwordVerification.isMatched && <ul><li className='text-danger'>Passwords not matching...</li></ul>}

                <Button type='submit' className='mt-3' 
                disabled={Object.values(passwordVerification).includes(false)}>SignUp</Button>
                </Form>
                </Col>
            </Row>
            <Row className='mt-2 mb-2 ps-4'>
                <Col>
                Already have an account? {' '}
                <a href='/' className='text-info fw-semibold'>Login Now</a></Col>
            </Row>
        </Container>
    )
}

export default SignUp