import React, {useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { TicketTable } from '../../components/TicketTable';
import { NestedLinks } from '../../components/NestedLinks';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllTickets} from '../Tickets-List/TicketAction';

export const DashBoard = () => {
  const dispatch = useDispatch();
  const {user_type} = useSelector((state) => state.user.user);
  const {tickets} = useSelector((state) => state.tickets);
  useEffect(() => {
    // fetching all tickets - p
    dispatch(fetchAllTickets(user_type));
  }, [dispatch, user_type]);

  const totalTickets = tickets.length;
  const pendingTickets = tickets.filter((row) => row.status !== 'Closed');

  return (
    <Container>
       <Row>
        <Col>
        <NestedLinks page={'Dashboard'}/>
        </Col>
       </Row>

        <Row>
            <Col className='text-center mt-5 mb-2'>
              <Link to='/add-ticket'>
                <Button>Add new Ticket</Button>
              </Link>
            </Col>
        </Row>

        <Row>
            <Col className='text-center mt-1 mb-2'>
            <div>Total Tickets: {totalTickets}</div>
            <div>Pending Tickets: {pendingTickets.length}</div>
            </Col>
        </Row>

        <Row>
          <Col>
          {user_type!=='client' && <h4>Showing {user_type} related tickets:-</h4>}
          </Col>
        </Row>

        <Row>
            <Col className='mt-2'>
              Recently Added Tickets
              <hr/>
            </Col>
        </Row>

        <Row>
            <Col className='recent-ticket'>
              <TicketTable/>
              <hr/>
            </Col>
        </Row>
    </Container>
  )
}
