import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    status: '',
    message: '',
    email: '',
    showOtpForm: false,
}
const PasswordResetSlice = createSlice({
    name: 'passwordReset',
    initialState,
    reducers: {
        otpRequestPending: (state) => {
            state.isLoading = true;
        },
        otpRequestSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.status = 'success';
            state.message = payload.message;
            state.email = payload.email;
            state.showOtpForm = true;
        },
        otpRequestFail: (state, {payload}) => {
            state.isLoading = false;
            state.status = 'error';
            state.message = payload;
        },
        updatePassSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.status = 'success';
            state.message = payload;
        }
    }
});

export const {otpRequestPending, otpRequestSuccess, otpRequestFail, updatePassSuccess} = PasswordResetSlice.actions
const {reducer} = PasswordResetSlice;
export default reducer;