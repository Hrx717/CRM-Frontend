import axios from 'axios';

const rootUrl = 'http://localhost:3001/v1/';
const allticketsUrl = rootUrl + 'ticket';
const singleTicketUrl = rootUrl + 'ticket/';
const closeTicketUrl = rootUrl + 'ticket/close-ticket/';
export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                allticketsUrl, {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT'),
                    }
                });
            resolve(result);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

export const getSingleTicket = (tId, msgObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get(
                singleTicketUrl + tId, {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT'),
                    }
                });
            resolve(result);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

export const updateReplyTicket = (tId, msgObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.put(
                singleTicketUrl + tId, msgObj, {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT'),
                    }
            });
            // console.log(result)
            resolve(result);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

export const updateTicketStatusClosed = (tId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.patch (
                closeTicketUrl + tId, {}, {
                    headers:{
                        Authorization: sessionStorage.getItem('accessJWT'),
                    }
            });
            // console.log(result)
            resolve(result);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
}