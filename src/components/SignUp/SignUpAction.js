import {registrationPending, registrationSuccess, registrationFail} from './SignUpSlice';
import {userSignUp} from '../../api/userApi';

export const userRegistration = (userData) => async (dispatch) => {
    try {
        dispatch(registrationPending());
        const result = await userSignUp(userData);
        if(result.status === 'success') {
            dispatch(registrationSuccess(result.message));
        }else {
            dispatch(registrationFail(result.message));
        }
    }
    catch(error) {
        dispatch(registrationFail(error.message));
    }
}