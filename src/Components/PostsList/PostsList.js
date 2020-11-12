import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../db';
import Post from '../Post/Post';



const PostsList = () => {
  const [postList, setPostList] = useState(undefined);
  useEffect(() => {
    if (!postList) {
      getAllPosts().then(res => {
        console.log('all posts', res.data);
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

export default PostsList;