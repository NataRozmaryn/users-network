import React from 'react';
import CommentMessage from './CommentMessage';
import CommentOwner from './CommentOwner';
import Separator from '../Separator/Separator';

const Comment = ({comment, publishDate}) => {
  console.log("publishDate", publishDate);
  return (
    <>
        <CommentOwner owner={comment.owner}/>
        <Separator />
        <CommentMessage comment={comment} publishDate={publishDate} />
    </>
  )};

export default Comment;