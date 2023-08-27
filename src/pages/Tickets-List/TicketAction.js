import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail,
    searchTickets} from './TicketListSlice';
import { getAllTickets } from '../../api/ticketApi';

export const fetchAllTickets = () => async (dispatch) => {
    //1. Start Loading
    dispatch(fetchTicketLoading());
    //2. Fetch data
    try {
        const result = await getAllTickets();
        console.log(result);
        if(result.data.status==='success')
        dispatch(fetchTicketSuccess(result.data.result));
        else
        dispatch(fetchTicketFail(result.data.message))
    }
    catch(error) {
        //3. error while fetching
        dispatch(fetchTicketFail(error.message));
    }
}

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
}