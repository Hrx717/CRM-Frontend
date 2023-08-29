import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading : false,
    successMsg : '',
    error : '',
}
const newTicketSlice = createSlice({
    name: 'newTicket',
    initialState,
    reducers: {
        addNewTicketLoading : (state) => {
            state.isLoading = true;
        },
        addNewTicketSuccess : (state, {payload}) => {
            state.isLoading = false;
            state.successMsg = payload;
            state.error = '';
        },
        addNewTicketFail : (state, {payload}) => {
            state.isLoading = false;
            state.successMsg = '';
            state.error = payload;
        },
        resetSuccessMsg : (state) => {
            state.isLoading = false;
            state.successMsg = '';
            state.error = '';
        }
    }
});

export const { addNewTicketLoading, addNewTicketSuccess, addNewTicketFail,
    resetSuccessMsg} = newTicketSlice.actions;
export default newTicketSlice.reducer;