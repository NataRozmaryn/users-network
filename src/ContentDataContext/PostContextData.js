import React, { useContext, useState, useEffect } from 'react';
import { getAllPosts } from '../db';

const Context = React.createContext(null);

export const usePostData = () => {
    // const contextState = useContext(Context);

    // if (contextState === null) {
    //     throw new Error('usePostData must be used within a PostDataProvider tag');
    // }
    // return contextState;
    return  useContext(Context);
}

export const PostDataProvider = (props) => {
    const [state, setState] =
        useState({
            value: [], 
            loading: true, 
            error: undefined
         });

    useEffect(() => {
        setState({
            ...state,
            loading: true, 
            error: state.error
        });

        (async () => {
            const result = await getAllPosts(props.postId);
            if (result.data) {
                setState({
                    ...state,
                    loading: false, 
                    value: result.data
                });
            } else {
                setState({...state, error: Error });
            }
        })();
    }, [props.postId]);

    return (
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    );
};

export default PostDataProvider;