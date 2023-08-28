import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './pages/Tickets-List/TicketListSlice';
import loginReducer from './components/LoginAndForget/LoginSlice';
import userSlice from './pages/Dashboard/userSlice';


const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userSlice,
    }
});

export default store;