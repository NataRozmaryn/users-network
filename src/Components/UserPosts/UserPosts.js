import React, { useState, useEffect } from 'react';
import { getUsersPostList } from '../../db';
import Post from '../Post/Post';

const UserPostsList = ({match, userid}) => {//debugger;

  const [postList, setPostList] = useState([]);
  const userId = userid || (match && match.params.userId);
  useEffect(() => {
    if (!postList.length) {
      getUsersPostList(userId).then(res => {
        console.log('all user posts', res.data);
        setPostList(res.data);
      });
    }
  });
  
  return (
    <div className="posts-list">
      {postList &&
        postList.map((item) => {
          return <Post post={item} key={item.id}/>
      })
      }
    </div>
  )
};

export default UserPostsList;