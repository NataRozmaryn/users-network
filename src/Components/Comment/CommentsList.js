import React, { useState, useEffect } from 'react';
import {getPostCommentsList} from '../../db';
import ShortUserInfo from '../ShortUserInfo';
import CommentMessage from './CommentMessage';
import CommentOwner from './CommentOwner';
import Loader from '../Loader';
import Separator from '../Separator/Separator';

const CommentsList = ({match}) => {
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
    {loading ? <Loader /> :
      commentsList && commentsList.map((comment) => <div className="comment" key={comment.id}>
        <CommentOwner owner={comment.owner}/>
        <Separator />
        <CommentMessage 
          comment={comment.message} 
          publishDate={comment.publishDate} />
        </div>)
    }
  </div>
  )
};

export default CommentsList;