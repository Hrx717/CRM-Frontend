import React, { useState } from 'react'
import { NestedLinks } from '../components/NestedLinks'
import {Container,Row,Col, Button} from 'react-bootstrap'
import { SearchForm } from '../components/SearchForm'
import { TicketTable } from '../components/TicketTable'

export const TicketList = () => {
    const [str,setStr] = useState('');
    const handleOnChange = (e) => {
        setStr(e.target.value);
    }

    // const searchTicket = (sttr) => {

    // }

    return (
    <Container>
        <Row>
            <Col>
            <NestedLinks page="Tickets-List"/>
            </Col>
        </Row>

        <Row className='mt-4'>
            <Col><Button>Add new Ticket</Button></Col>
            <Col className='text-end'>
                <SearchForm handleOnChange={handleOnChange}
                str={str}/>
            </Col>
        </Row>
        <hr/>
        <TicketTable/>
    </Container>
    )
}
