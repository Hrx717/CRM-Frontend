import React, {useEffect} from 'react'
import {Container,Row,Col, Button, Spinner, Alert} from 'react-bootstrap'
import { NestedLinks } from '../../components/NestedLinks'
import { MessageHistory } from '../../components/MessageReplies/MessageHistory'
import { UpdateTicket } from '../../components/UpdateTicket'
import {useParams, useNavigate} from 'react-router-dom'
import {closeTicket,deleteTicket, fetchSingleTicket} from '../Tickets-List/TicketAction'
import {useDispatch, useSelector} from 'react-redux'
import {resetResponseMsg} from '../Tickets-List/TicketListSlice';

export const SingleTicketView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading,error,selectedTicket, replyMsg, replyTicketError,
    delStatus, delMsg} = useSelector((state) => state.tickets);
    const {tId} = useParams();

    useEffect(() => {
        dispatch(fetchSingleTicket(tId));
        if(delStatus==='success') {
            navigate('/dashboard');
        }

        return () => {
            (replyMsg || replyTicketError || error) && dispatch(resetResponseMsg())
        }
    }, [dispatch, tId, replyMsg, replyTicketError, error, delStatus, navigate]);

    return (
        <Container>
            <Row>
                <Col>
                <NestedLinks page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                {isLoading && <Spinner variant='primary' animation='border'/>}
                {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
                {replyTicketError && <Alert variant='danger'>{replyTicketError}</Alert>}
                {error && <Alert variant='danger'>{error}</Alert>}
                {delMsg && <Alert variant={delStatus==='success' ? 'success' : 'danger'}>{delMsg}</Alert>}
                </Col>
            </Row>
            <Row>
                <Col className='fw-bold text-secondary'>
                <div>Subject: {selectedTicket.subject}</div>
                <div>Ticket Opened: {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
                <div>Status: {selectedTicket.status}</div>
                </Col>
                <Col className='text-end'>
                <Button variant='outline-dark' 
                onClick={() => dispatch(closeTicket(tId))}
                disabled={selectedTicket.status==='Closed'}>
                    Close  Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                {selectedTicket.conversations && <MessageHistory msg = {selectedTicket.conversations}/>}
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col>
                <UpdateTicket tId = {tId}/>
                </Col>
            </Row>

            <Row className='mt-3'>
                    <Col>
                    <Button variant='outline-danger' 
                    onClick={() => dispatch(deleteTicket(tId))}>
                        Delete Ticket</Button>
                    </Col>
            </Row>
        </Container>
    )
}
