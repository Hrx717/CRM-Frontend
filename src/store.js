import {configureStore} from '@reduxjs/toolkit';
import ticketsReducer from './pages/Tickets-List/TicketListSlice';
import loginReducer from './components/LoginAndForget/LoginSlice';
import userReducer from './pages/Dashboard/userSlice';
import newTicketReducer from './components/AddNewTicketForm/AddTicketSlicer';
import registrationReducer from './components/SignUp/SignUpSlice';
import passwordResetReducer from './pages/Password-Reset/PasswordSlice'

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer,
        openTicket: newTicketReducer,
        registration: registrationReducer,
        passwordReset: passwordResetReducer
    }
});

export default store;