import React, { useEffect } from 'react'
import { NestedLinks } from '../../components/NestedLinks'
import {Container,Row,Col, Button} from 'react-bootstrap'
import { SearchForm } from '../../components/SearchForm'
import { TicketTable } from '../../components/TicketTable'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllTickets} from './TicketAction'

export const TicketList = () => {
    const dispatch = useDispatch();
    const {user_type} = useSelector((state) => state.user.user);
    useEffect(() => {
        dispatch(fetchAllTickets(user_type));
    }, [dispatch, user_type]);

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
                <SearchForm/>
            </Col>
        </Row>
        <hr/>
        <TicketTable/>
    </Container>
    )
}
