import React from 'react'
import {Form, Button} from 'react-bootstrap'

export const UpdateTicket = ({handleTicketReply, handleOnReplySubmit, msg}) => {
  return (
    <Form onSubmit={handleOnReplySubmit}>
        <Form.Label className='text-secondary'>Reply or Update Ticket:</Form.Label>
        <Form.Control
        as='textarea'
        row='5'
        name='detail'
        value={msg}
        onChange={handleTicketReply}
        />
        <div className='text-end mt-3 mb-3'>
        <Button type='submit'>Reply</Button>
        </div>
    </Form>
  )
}
