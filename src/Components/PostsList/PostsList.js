import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../db';
import ShortUserInfo from '../ShortUserInfo';
import Tag from '../Tag';
import DateFormat from '../../DateFormat';
import Post from '../Post/Post';



const PostsList = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    if (!postList.length) {
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