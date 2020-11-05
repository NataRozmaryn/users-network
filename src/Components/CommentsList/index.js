import React, { useState, useEffect } from 'react';
import {getPostCommentsList} from '../../db';
import ShortUserInfo from '../ShortUserInfo';
import Comment from '../Comment';
import Loader from '../Loader';

const CommentsList = ({match, location, history}) => {
    const { postId } = match.params;
    const [commentsList, setCommentsList] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (!commentsList.length) {
      getPostCommentsList(postId).then(res => {
        console.log('all comments', res.data);

        setCommentsList(res.data);
      }).finally(() => setLoading(false));
    }
  }, [postId]);
return (
  <div className="comments-wrapper">
    <h3>Comment Page</h3>

    {loading} ? <Loader /> :
        {commentsList && commentsList.map((comment) => <div className="comment" key={comment.id}>
          <ShortUserInfo 
            title={comment.owner.title} 
            firstName={comment.owner.firstName} 
            lastName={comment.owner.lastName}
            picture={comment.owner.picture}
            />
          <Comment 
            comment={comment.message} 
            publishDate={comment.publishDate} />
          </div>)}
  </div>
  )
};

export default CommentsList;