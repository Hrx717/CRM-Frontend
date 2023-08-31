import {fetchTicketLoading, fetchTicketSuccess, fetchTicketFail,
    searchTickets,fetchSingleTicketLoading, 
    fetchSingleTicketSuccess, fetchSingleTicketFail,
    replyTicketLoading, replyTicketSuccess, replyTicketFail, 
    closeTicketLoading, closeTicketSuccess, closeTicketFail, 
    deleteTicketSuccessFail} from './TicketListSlice';
import { getAllTickets, getSingleTicket, updateReplyTicket,
    updateTicketStatusClosed, deleteTicketApi } from '../../api/ticketApi';

export const fetchAllTickets = (user_type) => async (dispatch) => {
    //1. Start Loading
    dispatch(fetchTicketLoading());
    //2. Fetch data
    try {
        const result = await getAllTickets(user_type);
        // console.log(result);
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

//filter ticket
export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
}

//fetch single ticket
export const fetchSingleTicket = (tId) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
        const result = await getSingleTicket(tId);

        if(result.data.status==='success')
        dispatch(fetchSingleTicketSuccess(result.data.result));
        else
        dispatch(fetchSingleTicketFail(result.data.message));
    }
    catch(error) {
        dispatch(fetchSingleTicketFail(error.message));
    }
}

//reply on ticket
export const replyOnTicket = (tId, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
        const result = await updateReplyTicket(tId, msgObj);
        if(result.data.status==='success')
        dispatch(replyTicketSuccess(result.data.message));
        else
        dispatch(replyTicketFail(result.data.message))
    }
    catch(error) {
        console.log(error);
        dispatch(replyTicketFail(error.message));
    }
}

//close ticket
export const closeTicket = (tId) => async (dispatch) =>{
    dispatch(closeTicketLoading());
    try {
        const result = await updateTicketStatusClosed(tId);
        if(result.data.status==='success') {
            dispatch(closeTicketSuccess(result.data.message));
            dispatch(fetchSingleTicket(tId));
        }
        else
        dispatch(closeTicketFail(result.data.message))
    }
    catch(error) {
        console.log(error);
        dispatch(closeTicketFail(error.message));
    }
}

export const deleteTicket = (tId) => async (dispatch) =>{
    dispatch(closeTicketLoading());
    try {
        const result = await deleteTicketApi(tId);
        const status = result.data.status;
        const message = result.data.message;
        dispatch(deleteTicketSuccessFail({status, message}));
    }
    catch(error) {
        console.log(error);
        const message = error.message;
        const status = 'error';
        dispatch(deleteTicketSuccessFail({status, message}));
    }
}