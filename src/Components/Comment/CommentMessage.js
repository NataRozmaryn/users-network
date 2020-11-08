import React from 'react';
import DateFormat from '../../DateFormat';
import Separator from '../Separator/Separator';
import './Comments.scss';

const CommentMessage = ({comment, publishDate}) => {
  console.log("publishDate", publishDate);
  return (
    <div className="commentText">
      <p className="commentText_message">{comment}</p>
      <Separator />
      <span className="commentText__date">{DateFormat(publishDate)}</span>
    </div>
  )};

export default CommentMessage;