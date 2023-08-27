import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './pages/Tickets-List/TicketListSlice';
import loginReducer from './components/LoginAndForget/LoginSlice';


const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
    }
});

export default store;