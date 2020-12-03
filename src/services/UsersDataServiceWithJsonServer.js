import axios from 'axios';

export const getUserDataFromJsonServer = (usersId) => {
    let data;
    return axios.get(`http://localhost:3000/users/${usersId}`)
    .then(resp => {console.log(`getUserDataFromJsonServer`, data);
        return data = resp.data;
    })
    .catch(error => {
        console.log(error);
    });
}

export const changeUserDataInJsonServer = (userId, data) => {
    axios.put(`http://localhost:3000/users/${userId}/`, data).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    });  
}
export const createUserDataInJsonServer = (data) => {
    axios.post('http://localhost:3000/users', 
        {data}
    ).then(resp => {
        console.log(resp.data);
    }).catch(error => {
        console.log(error);
    }); 
}  

export const deleteUserDataFromJsonServer = (userId) => {
    axios.delete(`http://localhost:3000/users/${userId}/`)
    .then(resp => {
        console.log(resp.data)
    }).catch(error => {
        console.log(error);
    });  
}