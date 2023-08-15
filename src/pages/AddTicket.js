import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { NestedLinks } from '../components/NestedLinks'
import { AddTicketForm } from '../components/AddTicketForm'

const intialForm = {
  subject: '',
  issuedate: '',
  details: ''
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(intialForm);

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    }) 
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submited', formData);
  }

  return (
    <Container>
        <Row>
            <Col>
            <NestedLinks page={"Add Ticket"}/>
            </Col>
        </Row>

        <Row>
            <Col><AddTicketForm handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
            /></Col>
        </Row>
    </Container>
  )
}
