import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './pages/Tickets-List/TicketListSlice';


const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
    }
});

export default store;