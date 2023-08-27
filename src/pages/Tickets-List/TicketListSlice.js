import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    tickets:[],
    isLoading:false,
    error:'',
    searchTicketList:[],
}

const TicketListSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers:{
        fetchTicketLoading: (state) => {
            state.isLoading = true;
        },
        fetchTicketSuccess: (state,action) => {
            state.tickets = action.payload;
            state.searchTicketList = action.payload;
            state.isLoading = false;
        },
        fetchTicketFail: (state,action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        searchTickets: (state, {payload}) => {
            state.searchTicketList = state.tickets.filter((row) => {
                if(!payload) return row;
                
                const searchStr = payload.toLowerCase();
                return row.subject.toLowerCase().includes(searchStr);
            });
        }
    }
});

const {reducer, actions} = TicketListSlice;
export const {fetchTicketLoading, 
    fetchTicketSuccess, fetchTicketFail,
    searchTickets} = actions;

export default reducer;