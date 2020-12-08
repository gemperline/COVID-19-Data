import { SET_POSTS, LOADING_DATA, LIKE_POST, UNLIKE_POST } from '../types';
import axios from 'axios';


// Get all posts
export const getPosts = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get('/posts')
        .then((res) => {
            dispatch({
                type: SET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_POSTS,
                payload: []
            })
            console.log(err);
        })
};


// Like a post
export const likePost = (postID) => (dispatch) => {
    axios.get(`/post/${postID}/like`)
        .then((res) => {
            dispatch({
                type: LIKE_POST,
                payload: res.data
            });
            console.log(res.data);
        })
        .catch(err => console.log(err));
};

// Unike a post
export const unlikePost = (postID) => (dispatch) => {
    axios.get(`/post/${postID}/unlike`)
        .then((res) => {
            dispatch({
                type: UNLIKE_POST,
                payload: res.data
            });
            console.log(res.data);
        })
        .catch(err => console.log(err));
};