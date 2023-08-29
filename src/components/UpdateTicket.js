import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { fetchSingleTicket, replyOnTicket } from '../pages/Tickets-List/TicketAction';

export const UpdateTicket = ({tId}) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const [reply, setReply] = useState('');
  const handleOnReplyChange = (e) => {
    setReply(e.target.value);
  }

  const handleOnReplySubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      sender: user.name,
      message: reply
    }
    dispatch(replyOnTicket(tId, msgObj));
    //show reply to page by:-
    dispatch(fetchSingleTicket(tId));
    setReply("");
  }

  return (
    <div>
      <Form onSubmit={handleOnReplySubmit}>
        <Form.Label className='text-secondary'>Reply or Update Ticket:</Form.Label>
        <Form.Control
        as='textarea'
        row='5'
        name='detail'
        value={reply}
        onChange={handleOnReplyChange}
        />
        <div className='text-end mt-3 mb-3'>
        <Button type='submit'>Reply</Button>
        </div>
      </Form>
    </div>
  )
}
