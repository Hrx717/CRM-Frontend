import React, {useState} from 'react';
import {Container,Button, Row, Col, Form, Spinner, Alert} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserPassword} from './PasswordAction';

const initialState = {
    pin: '',
    password: '',
    confirmPass: ''
}

const passwordError = {
    minLength: true,
    isMatched: true,
    phnlenght: true,
    allCheck: false,
}
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const {isLoading, status, message, email} = useSelector((state) => state.passwordReset);
    const [otpPass, setOtpPass] = useState(initialState);
    const [passwordVerification, setPasswordVerification] = useState(passwordError)

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const {pin, password} = otpPass;
        const formData = {email, pin,newPassword: password};
        dispatch(updateUserPassword(formData));
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setOtpPass({
            ...otpPass, 
            [name]: value
        });

        if(name==='password') {
            const minLength = value.length > 5;
            setPasswordVerification({
                ...passwordVerification,
                minLength
            });
        }

        if(name==='confirmPass') {
            const isMatched = otpPass.password === value;
            const allCheck = isMatched && passwordVerification.minLength;
            setPasswordVerification({
                ...passwordVerification,
                isMatched, allCheck
            });
        }
    }

    return (
        <Container>
            <Row>
                <Col><h1 className='text-center pt-2'>Update Password</h1></Col>
            <hr/>
            </Row>
            <Row>
                <Col>
                {message && <Alert variant={status==='success' ? 'success' : 'danger'}>{message}</Alert>}
                </Col>
            </Row>
            <Row className='mt-1 ps-4 pe-3 pb-2'>
                <Col>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>OTP:</Form.Label>
                    <Form.Control type='number' name='pin' placeholder='Enter OTP'
                    onChange={handleOnChange}
                    value={otpPass.pin}
                    required
                    />
                </Form.Group>
    
                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Password:</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password'
                    minLength='6'
                    onChange={handleOnChange}
                    value={otpPass.password}
                    required
                    />
                </Form.Group>
                {!passwordVerification.minLength && <ul><li className='text-danger'>Minimum 6 characters</li></ul>}

                <Form.Group>
                    <Form.Label className='fw-semibold pt-1'>Confirm Password:</Form.Label>
                    <Form.Control type='password' name='confirmPass' placeholder='Confirm password'
                    onChange={handleOnChange}
                    value={otpPass.confirmPass}
                    required
                    />
                </Form.Group>
                {!passwordVerification.isMatched && <ul><li className='text-danger'>Both the Passwords should match</li></ul>}

                <Button type='submit' className='mt-3' 
                disabled={Object.values(passwordVerification).includes(false)}>Submit</Button>
                {isLoading && <Spinner animation='border'/>}
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdatePassword