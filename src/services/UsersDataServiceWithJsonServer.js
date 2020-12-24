import axios from 'axios';
export default class UserLoginServiceWithJsonServer {
    registerUser = (data) => {
        axios.post('http://localhost:3000/users', data)
        .then(resp => {debugger;
            console.log(resp.data); 
            return resp.data;
        }).catch(error => {
            console.log(error); 
            return error;
        });
    }

    login = (email, data) => {
        return axios.get(`http://localhost:3000/users/?email=${email}`)
            .then(res => {
                console.log(`getUserDataFromJsonServer`, res.data);
                return res.data;
            })
            .catch(error => {
                console.log(error);
                return error;
            });
    }
    getUserData = (usersId) => {
        let data;
        return axios.get(`http://localhost:3000/users/${usersId}`)
            .then(resp => {
                console.log(`getUserDataFromJsonServer`, data);
                return data = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    updateUserAccount = (userId, data) => {
        axios.put(`http://localhost:3000/users/${userId}/`, data)
            .then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
    }

    deleteUserAccount = (userId) => {
        axios.delete(`http://localhost:3000/users/${userId}/`)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
                console.log(error);
            });
    }
}