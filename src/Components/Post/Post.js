import React, { useState } from 'react';
import PostOwner from './PostOwner';

import "./Post.scss";
import Separator from '../Separator/Separator';
import CommentsList from '../Comment/CommentsList';
import PostContent from './PostContent';
import { CommentDataProvider } from '../../ContentDataContext/CommentContextData';

const Post = ({ post }) => {
    const [showComment, SetShowComment] = useState(false);

    console.log("post", post);
    const owner = post.owner;
    const OpenCommentList = () => {
        SetShowComment(true);
    }
    return (
        <div className="post" key={post.id}>
            <PostOwner owner={owner} />
            <Separator />
            <PostContent post={post} />
            <Separator />
            <button onClick={OpenCommentList}>Comment List</button>
            {showComment ? <CommentDataProvider postId={post.id}>
                <CommentsList />
            </CommentDataProvider> : null}
        </div>
    )
};

export default Post;