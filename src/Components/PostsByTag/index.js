import React, { useState, useEffect } from 'react';
import { getPostListByTag } from '../../db';
import Posts from '../Post/Post';


const PostsByTag = ({match}) => {//debugger;
  const [postList, setPostList] = useState([]);
  const {tagTitle} = match.params;
  useEffect(() => {
    if (!postList.length) {
      getPostListByTag(tagTitle).then(res => {
        console.log('all posts by tag', res.data);

        setPostList(res.data);
      });
    }
  }, [tagTitle]);
  
  return (
    <div className="posts-wrapper">
      <div>
        <div className="posts-list">
          {postList &&
            postList.map((item) => {
              return <Posts post={item} />
          })
          }
      </div>
    </div>
  </div>
  )
};

export default PostsByTag;