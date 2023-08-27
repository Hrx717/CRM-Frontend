import React, {useState} from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap'
import { NestedLinks } from '../components/NestedLinks'
import { MessageHistory } from '../components/MessageReplies/MessageHistory'
import { UpdateTicket } from '../components/UpdateTicket'
import {useParams} from 'react-router-dom'

export const SingleTicketView = () => {
    const {id} = useParams();
    console.log(id);
    const [ticketReply,setTicketReply] = useState('');

    const handleTicketReply = (e) => {
        setTicketReply(e.target.value);
    }

    const handleOnReplySubmit = () => {
        console.log("Submitted", ticketReply);
    }
  return (
    <Container>
        <Row>
            <Col>
            <NestedLinks page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='fw-bold text-secondary'>
            <div>Subject: </div>
            <div>Ticket Opened: </div>
            <div>Status: </div>
            </Col>
            <Col className='text-end'>
            <Button variant='outline-dark'>Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            <MessageHistory msg = {''}/>
            </Col>
        </Row>

        <Row className='mt-3'>
            <Col>
            <UpdateTicket 
            handleTicketReply={handleTicketReply}
            handleOnReplySubmit={handleOnReplySubmit}
            msg = {ticketReply}/>
            </Col>
        </Row>
    </Container>
  )
}
