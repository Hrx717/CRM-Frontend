import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { NestedLinks } from '../../components/NestedLinks'
import { AddTicketForm } from '../../components/AddNewTicketForm/AddTicketForm'

export const AddTicket = () => {
  return (
    <Container>
        <Row>
            <Col>
            <NestedLinks page={"Add Ticket"}/>
            </Col>
        </Row>

        <Row>
            <Col><AddTicketForm/></Col>
        </Row>
    </Container>
  )
}
