import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    isLoading: false,
    isAuth: false,
    error: ''
}
const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = '';
        },
        loginFail: (state, action) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = action.payload;
        },
    }
});

const {reducer, actions} = LoginSlice;
export const { loginPending, loginSuccess, loginFail } = actions;

export default reducer;