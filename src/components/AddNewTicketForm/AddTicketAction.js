import { createNewTicket } from '../../api/ticketApi';
import { addNewTicketLoading, addNewTicketSuccess, addNewTicketFail} from './AddTicketSlicer';

export const openNewTicket = (formData) => async (dispatch) => {
    try {
        dispatch(addNewTicketLoading());
        const result = await createNewTicket(formData);
        if(result.data.status==='success') {
            dispatch(addNewTicketSuccess(result.data.message));
        }
        else
        dispatch(addNewTicketFail(result.data.message))
    }
    catch(error) {
        dispatch(addNewTicketFail());
    }
}