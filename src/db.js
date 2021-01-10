import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5f9f2dd3e85f8408915aeed6';
const LIMIT = 5;


export const getAllUsers = (PAGE) => {
    return axios.get(`${BASE_URL}/user?page=${PAGE}&limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getUserById = (USER_ID) => {
    return axios.get(`${BASE_URL}/user/${USER_ID}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getAllPosts = (LIMIT) => {
    return axios.get(`${BASE_URL}/post?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getUserPostById = (POST_ID) => {
    return axios.get(`${BASE_URL}/post/${POST_ID}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getUsersPostList = (USER_ID, LIMIT) => {
    // getPostCommentsList(res.data.id)
    return axios.get(`${BASE_URL}/user/${USER_ID}/post?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data  
    });
};
export const getUsersPostListWithComments = (USER_ID, LIMIT) => {
    return axios.get(`${BASE_URL}/user/${USER_ID}/post?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getPostListByTag = (TAG_TITLE, LIMIT) => {
    return axios.get(`${BASE_URL}/tag/${TAG_TITLE}/post?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getPostCommentsList = (POST_ID, limit) => {
    if (!limit)
        limit = LIMIT;
    return axios.get(`${BASE_URL}/post/${POST_ID}/comment?limit=${limit}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getTagsList = (LIMIT) => {
    return axios.get(`${BASE_URL}/tag?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getDataFromJsonServer = () => {
    let data;
    return axios.get('http://localhost:3009/db')
        .then(resp => {
            data = resp.data;
            data.forEach(e => {
                console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

export const changeDataInJsonServer = (data) => {
    axios.put('http://localhost:3009/users/6/', data).then(resp => {

        console.log(resp.data);
    }).catch(error => {

        console.log(error);
    });
}

export const deleteDataFromJsonServer = () => {
    axios.delete('http://localhost:3009/users/1/')
        .then(resp => {
            console.log(resp.data)
        }).catch(error => {
            console.log(error);
        });
}
