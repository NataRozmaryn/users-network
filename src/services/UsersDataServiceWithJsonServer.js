import axios from 'axios';
export default class UserLoginServiceWithJsonServer {
    registerUser = (data) => {
        axios.post('http://localhost:3009/users', data)
        .then(resp => {
            console.log("registerUser",resp.data); 
            return resp.data;
        }).catch(error => {
            console.log(error); 
            return error;
        });
    }

    login = (email, data) => {
        return axios.get(`http://localhost:3009/users/?email=${email}`)
            .then(res => {
                console.log(`getUserDataFromJsonServer`, res.data);
                return res.data;
            })
            .catch(error => {
                console.log(error);
                return error;
            });
    }
    getUserData = (usersEmail) => {
        let data;
        let address = `http://localhost:3009/users/?email=${usersEmail}`;
        console.log("address", address)
        return axios.get(address)
            .then(resp => {
                console.log(`getUserDataFromJsonServer`, data);
                return data = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
    }

    updateUserAccount = (userId, data) => {
        axios.put(`http://localhost:3009/users/${userId}/`, data)
            .then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
    }

    deleteUserAccount = (userId) => {
        axios.delete(`http://localhost:3009/users/${userId}/`)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
                console.log(error);
            });
    }
}