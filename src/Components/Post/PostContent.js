import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag';
import DateFormat from '../../DateFormat';
import "./Post.scss";
import CutLongStr from '../../CutLongStr';


const PostContent = ({ post }) => {
    console.log("post", post);
    const link = CutLongStr(post.link);
    return (
        <div className="post__content">
            <img className="post__content--picture" src={post.image} alt="" loading="lazy" />
            <div className="post__tags">
                {post.tags.map((tag) => {
                    console.log(tag);
                    return <Link to={`/tags/${tag}`}>
                        <Tag title={tag} key={tag} />
                    </Link>
                })}
            </div>
            <p className="post__content--title">{post.text}</p>
            <a href={post.link}>{link}</a>
            <p className="post__content--like">&#10084; {post.likes} Likes</p>
            <p className="post__content--date">{DateFormat(post.publishDate)}</p>
        </div>
    )
};

export default PostContent;