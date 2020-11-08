import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag';
import DateFormat from '../../DateFormat';
import "./Post.scss";
import Separator from '../Separator/Separator';
import CutLongStr from '../../CutLongStr';

const Post = ({post}) => {
    console.log("post", post);
    const owner = post.owner;
    const link = CutLongStr(post.link);
    return <div className="post" key={post.id}>
        <div className="post__userInfo">
            <img className="post__userInfo__img" src={owner.picture} alt="" />
            <div>
                <p className="post__userInfo__name">{owner.title}. {owner.firstName} {owner.lastName}</p>
                <p className="post__userInfo__email">&#9993; {owner.email}</p>
            </div>
        </div>
        <Separator />
        <div className="post__content">
            <img className="post__content__picture" src={post.image} alt="" />
            <div className="post__tags">
                {post.tags.map((tag) => { return <Tag title={tag} key={tag}/> })}
            </div>
            <p className="post__content__title">{post.text}</p>
            <a href={post.link}>{link}</a>
                <p className="post__content__like">&#10084; {post.likes} Likes</p>
                <p className="post__content__date">{DateFormat(post.publishDate)}</p>   
        </div>             
        <Separator />   
        <Link
            to={{
                pathname: `posts/${post.id}`,
            }}
        > Get Post Comments</Link> 
            
            <div>
            <Link
                to={{
                    pathname: `users/${post.owner.id}`,
                }}
                >Get Owner Profile</Link>
            </div>
        </div>
};

export default Post;