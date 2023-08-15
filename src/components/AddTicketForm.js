import React from 'react'
import {Container,Form, Button} from 'react-bootstrap'

export const AddTicketForm = ({handleOnChange, handleOnSubmit, formData}) => {
    // console.log(formData)
  return (
    <Container style={styles.FromBox}>
        <h2 className='text-center pt-3'>ADD NEW TICKET</h2>
        <hr/>
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
              type='text'
              name='subject'
              placeholder='Subject'
              value={formData.subject}
              onChange={handleOnChange}
              required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
              type='date'
              name='issuedate'
              value={formData.issuedate}
              onChange={handleOnChange}
              required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
              as="textarea"
              rows="4"
              name='details'
              value={formData.details}
              onChange={handleOnChange}
              required
              />
            </Form.Group>

            <div className='d-grid gap-2 col-6 mx-auto mt-3'>
                <Button type='submit'>ADD</Button>
            </div>
            <hr/>
          </Form>
    </Container>
  )
}


const styles = {
    FromBox : {
        borderRadius: "8px",
        boxShadow: "0 0 15px -5px black",
        width: "60%",
        marginTop: "12px"
    }
}