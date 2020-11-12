import React from 'react';


const ShortUserInfo = ({title, firstName, lastName, email, picture}) => {

return (
  <div className="comment__shortUserInfo">
    <img src={picture} alt="" className="comment__picture comment__picture--round-image" loading="lazy"/>
    <div className="shortUserInfo-main_info">
        <p className="comment__name">{title} {lastName} {firstName}</p>
        <p className="comment__email">{email}</p>
    </div>
  </div>
  )   
};

export default ShortUserInfo;