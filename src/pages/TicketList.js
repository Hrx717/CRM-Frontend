import React, { useState } from 'react'
import { NestedLinks } from '../components/NestedLinks'
import {Container,Row,Col, Button} from 'react-bootstrap'
import { SearchForm } from '../components/SearchForm'
import { TicketTable } from '../components/TicketTable'
import {Link} from 'react-router-dom'

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
            <Col><Link to='/add-ticket'>
                <Button>Add new Ticket</Button>
            </Link>
            </Col>
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
