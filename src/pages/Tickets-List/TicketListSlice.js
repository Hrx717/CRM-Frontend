import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    tickets:[],
    isLoading:false,
    error:'',
    replyTicketError: '',
    searchTicketList:[],
    selectedTicket: {},
    replyMsg: '',
}

const TicketListSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers:{
        //all tickets
        fetchTicketLoading: (state) => {
            state.isLoading = true;
        },
        fetchTicketSuccess: (state,action) => {
            state.tickets = action.payload;
            state.searchTicketList = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        fetchTicketFail: (state,action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        //filter ticket
        searchTickets: (state, {payload}) => {
            state.searchTicketList = state.tickets.filter((row) => {
                if(!payload) return row;
                
                const searchStr = payload.toLowerCase();
                return row.subject.toLowerCase().includes(searchStr);
            });
        },
        // single ticket
        fetchSingleTicketLoading: (state) => {
            state.isLoading = true;
        },
        fetchSingleTicketSuccess: (state,action) => {
            state.isLoading = false;
            state.selectedTicket = action.payload;
            state.error = '';
        },
        fetchSingleTicketFail: (state,action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        //ticket reply
        replyTicketLoading: (state) => {
            state.isLoading = true;
        },
        replyTicketSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.replyTicketError = '';
            state.replyMsg = payload;
        },
        replyTicketFail: (state,action) => {
            state.replyTicketError = action.payload;
            state.isLoading = false;
        },
        //close Ticket
        closeTicketLoading: (state) => {
            state.isLoading = true;
        },
        closeTicketSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.error = '';
            state.replyMsg = payload;
        },
        closeTicketFail: (state,action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});

const {reducer, actions} = TicketListSlice;
export const {
    fetchTicketLoading, 
    fetchTicketSuccess, 
    fetchTicketFail,
    searchTickets,
    fetchSingleTicketLoading, 
    fetchSingleTicketSuccess, 
    fetchSingleTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail,
} = actions;

export default reducer;