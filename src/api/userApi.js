import axios from 'axios'
import { json } from 'react-router-dom';

const rootUrl = 'http://localhost:3001/v1/'
const loginUrl = rootUrl + 'user/login';
const userProfileUrl = rootUrl + 'user';
const logoutUrl = rootUrl + 'user/logout';
const newAccessJWT = rootUrl + 'tokens';

export const userLogin = (formData) => {
    return new Promise(async (resolve,reject) => {
        try{
            const result = await axios.post(loginUrl, formData);

            resolve(result.data);
            if(result.data.status==='success') {
                sessionStorage.setItem("accessJWT", result.data.accessJWT);
                localStorage.setItem("crmSite", JSON.stringify({refreshJWT: result.data.refreshJWT}));
            }
        }
        catch(error) {
            reject(error.message);
        }
    })
}

export const fetchUser = () => {
    return new Promise(async (resolve,reject) => {
        try{
            const accessJWT = sessionStorage.getItem('accessJWT');
            if(!accessJWT) {
                reject('Session expired, Login Again');
            }
            const result = await axios.get(userProfileUrl, {
                headers: {
                    Authorization: accessJWT
                }
            });
            resolve(result.data);
        }
        catch(error) {
            reject(error.message);
        }
    })
}

export const userLogout = async () => {
    try {
        await axios.delete(logoutUrl, {
            headers: {
                Authorization: sessionStorage.getItem('accessJWT')
            }
        })
    }
    catch(error) {
        console.log(error);
    }
}

export const fetchNewAccessJWT = () => {
    return new Promise(async (resolve,reject) => {
        try{
            const {refreshJWT} = JSON.parse(localStorage.getItem('crmSite'));

            if(!refreshJWT) {
                reject('Token not found');
            }
            const result = await axios.get(newAccessJWT, {
                headers: {
                    Authorization: refreshJWT
                }
            });
            
            if(result.data.status==='success') {
                sessionStorage.setItem("accessJWT", result.data.accessJWT);
            }
            if(result.data.status===403) {
                localStorage.removeItem('crmSite');
            }
            resolve(true);
        }
        catch(error) {
            if(error.message) {
                localStorage.removeItem('crmSite');
            }
            reject(error.message);
        }
    })
}