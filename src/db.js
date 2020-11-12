import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '5f9f2dd3e85f8408915aeed6';


export const getAllUsers = (LIMIT) => {
    return axios.get(`${BASE_URL}/user?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
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
    return axios.get(`${BASE_URL}/user/${USER_ID}/post?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
export const getPostListByTag = (TAG_TITLE, LIMIT) => {
    return axios.get(`${BASE_URL}/tag/${TAG_TITLE}/post?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getPostCommentsList = (POST_ID, LIMIT) => {
    return axios.get(`${BASE_URL}/post/${POST_ID}/comment?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};

export const getTagsList = (LIMIT) => {
    return axios.get(`${BASE_URL}/tag?limit=${LIMIT}`, { headers: { 'app-id': APP_ID } }).then((res) => {
        return res.data
    });
};
       