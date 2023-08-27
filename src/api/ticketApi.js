import axios from 'axios'

export const getAllTickets = async() => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = axios.get(
                'http://localhost:3001/v1/ticket', {
                    'headers':{
                        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIyQGVtYWlsLmNvbSIsImlhdCI6MTY5MzEyNjI1NiwiZXhwIjoxNjkzMjEyNjU2fQ.YaWOrNUiDzkiFgFacb0Fe2mxlYyOis6YWaRyb-My0xc",
                    }
                });
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    });
}