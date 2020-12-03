import React, { useContext, useState, useEffect } from 'react';
import { getPostCommentsList } from '../db';

const Context = React.createContext(null);

export const useCommentData = () => {
    const contextState = useContext(Context);

    if (contextState === null) {
        throw new Error('useCommentData must be used within a CommentDataProvider tag');
    }
    return contextState;
}

export const CommentDataProvider = (props) => {
    const [state, setState] =
        useState({
            value: [],
            loading: true,
            error: undefined
        });

    useEffect(() => {
        setState({ ...state, loading: true });

        (async () => {
            const result = await getPostCommentsList(props.postId);
            if (result.data) {
                setState({
                    ...state,
                    loading: false,
                    value: result.data
                });
            } else {
                setState({ ...state, error: Error });
            }
        })();
    }, [props.postId]);

    return (
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    );
};

export default CommentDataProvider;