import React from 'react';
import './UsersList.scss';

const UserInfo =({picture, title, lastName, firstName, email}) => {
    return (
        <div>
            <img src={picture} alt="" className="usersList__user__picture" loading="lazy"/>
            <div className="usersList__user__info">
                <p className="usersList__user__name">{title}. {lastName} {firstName}</p>
                <p className="usersList__user__email">{email}</p>
            </div>
        </div>      
    );
}

export default UserInfo;
