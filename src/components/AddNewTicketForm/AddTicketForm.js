import React, {useState} from 'react';
import {Container,Form, Button, Spinner, Alert} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {openNewTicket} from './AddTicketAction'

const intialForm = {
  subject: '',
  issueDate: '',
  message: ''
};
export const AddTicketForm = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const {successMsg, isLoading, error} = useSelector((state) => state.openTicket);
  const [formData, setFormData] = useState(intialForm);

  // useEffect(() => {
  //   return () => {
  //     successMsg && dispatch(restSuccessMSg());
  //   };
  // }, [dispatch, frmData, frmDataErro]);

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    }) 
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const sender = user.name;
    dispatch(openNewTicket({...formData, sender}));
  }
  return (
    <Container style={styles.FormBox}>
        <h2 className='text-center pt-3'>ADD NEW TICKET</h2>
        <hr/>
        <div>
          {isLoading && <Spinner variant='primary' animation='border'/>}
          {error && <Alert variant='danger'>{error}</Alert>}
          {successMsg && <Alert variant='success'>{successMsg}</Alert>}
        </div>
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
              name='issueDate'
              value={formData.issueDate}
              onChange={handleOnChange}
              required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
              as="textarea"
              rows="4"
              name='message'
              value={formData.message}
              onChange={handleOnChange}
              required
              />
            </Form.Group>

            <div className='d-grid gap-2 col-6 mx-auto mt-3'>
                <Button type='submit'>OPEN TICKET</Button>
            </div>
            <hr/>
          </Form>
    </Container>
  )
}


const styles = {
    FormBox : {
        borderRadius: "8px",
        boxShadow: "0 0 15px -5px black",
        width: "60%",
        marginTop: "12px"
    }
}