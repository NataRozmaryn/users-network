import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5f9f2dd3e85f8408915aeed6';


export const getAllUsers = () => {
    return axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getUserById = (USER_ID) => {
    return axios.get(`${BASE_URL}/user/${USER_ID}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getAllPosts = () => {
    return axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
    
export const getUserPostById = (POST_ID) => {
    return axios.get(`${BASE_URL}/post/${POST_ID}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getUsersPostList = (USER_ID) => {
    return axios.get(`${BASE_URL}/user/${USER_ID}/post`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getPostListByTag = (TAG_TITLE) => {
    return axios.get(`${BASE_URL}/tag/${TAG_TITLE}/post?limit=40`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getPostCommentsList = (POST_ID) => {
    return axios.get(`${BASE_URL}/post/${POST_ID}/comment`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getTagsList = () => {
    return axios.get(`${BASE_URL}/tag`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
       