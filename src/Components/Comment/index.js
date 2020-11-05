import React from 'react';
import DateFormat from '../../DateFormat';

const Comment = ({comment, publishDate}) => {
  console.log("publishDate", publishDate);
  return (
  <div className="message">
    <p>{comment} {DateFormat(publishDate)}</p>
  </div>
  )};

export default Comment;