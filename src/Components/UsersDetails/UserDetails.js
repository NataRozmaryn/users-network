import React, { useEffect, useState } from 'react';
import Loader from '../Loader';

import { getUserById } from '../../db';
import DateFormat from '../../DateFormat';
import './UserDetails.scss';
import UserPostsList from '../UserPosts/UserPosts';

const UserDetails = ({ match }) => {
  const [user, setUser] = useState([]);
  const { userId } = match.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUserById(userId)
      .then((res) => { console.log("user details", res); return setUser(res); })
      .finally(() => setLoading(false));
  }, [userId]);

  return loading ? <Loader /> :
    user ? (
      <div>
        <div className="userDetails" key={user.id}>
          <img src={user.picture} alt="" className="userDetails__picture" loading="lazy" />
          <div className="userDetails__info">
            <p className="userDetails__info--gray">{user.id}</p>
            <h3 className="userDetails__info--bold">{user.title}. {user.firstName} {user.lastName}</h3>
            <p>
              <span className="userDetails__info--bold">Gender:	&#9893;</span> {user.gender}
            </p>
            <p>
              <span className="userDetails__info--bold">Date of Birth: &#127874;</span> {DateFormat(user.dateOfBirth)}
            </p>
            <p>
              <span className="userDetails__info--bold">RegisterDate:</span> {DateFormat(user.registerDate)}
            </p>
            <p>
              <span className="userDetails__info--bold">Email: &#9993;</span> {user.email}
            </p>
            <p>
              <span className="userDetails__info--bold">Phone: &#128222;</span> {user.phone}
            </p>
          </div>
          <div className="userDetails__address">
            <p><span className="userDetails__info--bold">Address</span></p>
            <p><span className="userDetails__info--bold">Country: </span>{user.location.country}</p>
            <p><span className="userDetails__info--bold">State: </span>{user.location.state}</p>
            <p><span className="userDetails__info--bold">City: </span>{user.location.city}</p>
            <p><span className="userDetails__info--bold">Street: </span>{user.location.street}</p>
          </div>
        </div>
        <div className="separator"></div>
        <UserPostsList userid={user.id} />
      </div>
    ) : <p>No user defined</p>;
};

export default UserDetails;
