import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const TicketTable = () => {
    const {searchTicketList, isLoading, error} = useSelector((state) => state.tickets);
    if(isLoading) return <h3>Loading...</h3>
    if(error) return <h3>{error}</h3>
    return (
        <Table className='mt-4' striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {searchTicketList.length ? (
                    searchTicketList.map((row, i) => (
                        <tr key={row._id}>
                        <td>{i+1}</td>
                        <td>
                            <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
                        </td>
                        <td>{row.status}</td>
                        <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="text-center">
                        No ticket show{" "}
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
    )
}