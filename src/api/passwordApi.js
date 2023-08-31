import axios from 'axios'

const resetPassUrl = 'http://localhost:3001/v1/user/reset-password';

export const requestPassOTP = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.post(resetPassUrl, {email});
            resolve(result);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

export const updatePassword = (formData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.patch(resetPassUrl, formData);
            resolve(result);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}