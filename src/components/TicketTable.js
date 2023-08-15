import React from 'react'
import {Table} from 'react-bootstrap'

export const TicketTable = () => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>ssl issue</td>
                <td>not resolve</td>
                <td>2023:08:15</td>
            </tr>
        </tbody>
    </Table>
  )
}