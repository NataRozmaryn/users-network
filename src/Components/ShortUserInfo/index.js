import React from 'react';


const ShortUserInfo = ({title, firstName, lastName, email, picture}) => {

return (
  <div className="shortUserInfo-wrapper">
    <div className="shortUserInfo-picture">
        <img src={picture} alt="" className="round-image" />
    </div>
    <div className="shortUserInfo-main_info">
        <p className="name">{title} {lastName} {firstName}</p>
        <p className="email">{email}</p>
  </div>
  </div>
  )   
};

export default ShortUserInfo;