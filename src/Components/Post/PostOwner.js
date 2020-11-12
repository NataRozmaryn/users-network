import React from 'react';
import { Link } from 'react-router-dom';


const PostOwner = ({owner}) => {
    console.log("postOwner", owner);
   
    return (
    <Link
        to={`/users/${owner.id}`}
    >
        <div className="post__userInfo">
            <img className="post__userInfo--img" src={owner.picture} alt="" loading="lazy"/>
            <div>
                <p className="post__userInfo--name">{owner.title}. {owner.firstName} {owner.lastName}</p>
                <p className="post__userInfo--email">&#9993; {owner.email}</p>
            </div>
        </div>   
    </Link>      
    )};

export default PostOwner;