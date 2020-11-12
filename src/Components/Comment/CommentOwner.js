import React from 'react';
import './Comments.scss';

const CommentOwner = ({owner}) => {
  console.log("comment_owner", owner);
  return (
  <div className="commentOwner">
    <img src={owner.picture} alt="" className="commentOwner__img" loading="lazy"/>
    <div>
        <p className="comment__name">{owner.title}. {owner.lastName} {owner.firstName}</p>
        <p className="commentOwner__email">{owner.email}</p>
    </div>  
  </div>
  )};

export default CommentOwner;