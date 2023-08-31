import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './pages/Tickets-List/TicketListSlice';
import loginReducer from './components/LoginAndForget/LoginSlice';
import userReducer from './pages/Dashboard/userSlice';
import newTicketReducer from './components/AddNewTicketForm/AddTicketSlicer';
import registrationReducer from './components/SignUp/SignUpSlice';

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer,
        openTicket: newTicketReducer,
        registration: registrationReducer
    }
});

export default store;