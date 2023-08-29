import React, {useEffect} from 'react'
import {Container,Row,Col, Button, Spinner, Alert} from 'react-bootstrap'
import { NestedLinks } from '../../components/NestedLinks'
import { MessageHistory } from '../../components/MessageReplies/MessageHistory'
import { UpdateTicket } from '../../components/UpdateTicket'
import {useParams} from 'react-router-dom'
import {closeTicket, fetchSingleTicket} from '../Tickets-List/TicketAction'
import {useDispatch, useSelector} from 'react-redux'

export const SingleTicketView = () => {
    const dispatch = useDispatch();
    const {isLoading,error,selectedTicket, replyMsg} = useSelector((state) => state.tickets);
    const {tId} = useParams();

    useEffect(() => {
        dispatch(fetchSingleTicket(tId));
    }, [dispatch]);

    return (
        <Container>
            <Row>
                <Col>
                {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
                {error && <Alert variant='danger'>{error}</Alert>}
                </Col>
            </Row>
            <Row>
                <Col>
                <NestedLinks page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                {isLoading && <Spinner variant='primary' animation='border'/>}
                {error && <Alert variant='danger'>{error}</Alert>}
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
                    Close Ticket</Button>
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
        </Container>
    )
}
