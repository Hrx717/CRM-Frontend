import {otpRequestPending, otpRequestSuccess, otpRequestFail, updatePassSuccess} from './PasswordSlice';
import {requestPassOTP, updatePassword} from '../../api/passwordApi';

export const sendPasswordResetOTP = (email) => async (dispatch) => {
    try {
        dispatch(otpRequestPending());
        const result = await requestPassOTP(email);

        if(result.data.status === 'success') {
            const message = result.data.message;
            dispatch(otpRequestSuccess({message, email}));
        }
        else {
            dispatch(otpRequestFail(result.data.message));
        }
    }
    catch(error) {
        console.log(error);
        dispatch(otpRequestFail(error.message));
    }
}

export const updateUserPassword = (formData) => async (dispatch) => {
    try {
        dispatch(otpRequestPending());
        const result = await updatePassword(formData);

        if(result.data.status === 'success') {
            dispatch(updatePassSuccess(result.data.message));
        }
        else {
            dispatch(otpRequestFail(result.data.message));
        }
    }
    catch(error) {
        console.log(error);
        dispatch(otpRequestFail(error.message));
    }
}