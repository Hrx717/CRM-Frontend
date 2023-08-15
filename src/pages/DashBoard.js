import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { TicketTable } from '../components/TicketTable'
import { NestedLinks } from '../components/NestedLinks'

export const DashBoard = () => {
  return (
    <Container>
       <Row>
        <Col>
        <NestedLinks page={'Dashboard'}/>
        </Col>
       </Row>

        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Button>Add new Ticket</Button>
            </Col>
        </Row>

        <Row>
            <Col className='text-center mt-1 mb-2'>
            <div>Total Tickets: 50</div>
            <div>Pending Tickets: 5</div>
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
