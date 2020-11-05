import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../db';
import ShortUserInfo from '../ShortUserInfo';
import Tag from '../Tag';
import DateFormat from '../../DateFormat';


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

    <div className="posts-wrapper">
      <div>
        <div className="posts-list">
          {postList &&
            postList.map((item) => {
              let tags = item.tags;
              return <div className="post" key={item.id}>
                <ShortUserInfo
                  title={item.owner.title}
                  firstName={item.owner.firstName}
                  lastName={item.owner.lastName}
                  email={item.owner.email}
                  picture={item.owner.picture} />

                <div className="post-info">
                  <img className="post-img" src={item.image} alt="" />
                  <div className="tags-wrapper">
                    {tags.map((tag) => { return <Tag title={tag} key={tag}/> })}
                  </div>
                  <p className="post-title">{item.text}</p>
                  <a href={item.link}>{item.link}</a>

                  <span className="post-title">&#10084; {item.likes} Likes</span>
                  <span className="post-title">{DateFormat(item.publishDate)}</span>
                  <div>
                    <Link
                      to={{
                        pathname: `posts/${item.id}`,

                      }}
                      key={item.id}
                    > Get Post Comments</Link>
                  </div>
                  <div>
                    <Link
                      to={{
                        pathname: `users/${item.owner.id}`,

                      }}
                      key={item.id}
                      >Get Owner Profile</Link>
                  </div>

                  </div>
                  </div>
          })
          }
      </div>
              </div>
  </div>
  )
};

export default PostsList;