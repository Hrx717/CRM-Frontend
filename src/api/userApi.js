import axios from 'axios'

const loginUrl = 'http://localhost:3001/v1/user/login';
export const userLogin = (formData) => {
    return new Promise(async (resolve,reject) => {
        try{
            const result = await axios.post(loginUrl, formData);

            resolve(result.data);
            if(result.data.status==='success') {
                sessionStorage.setItem("accessJWT", result.data.accessJWT);
                localStorage.setItem("crmSite", JSON.stringify({refershJWT: result.data.refershJWT}));
            }
        }
        catch(error) {
            reject(error);
        }
    })
}

