import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

import { getUserById } from '../../db';
import DateFormat from '../../DateFormat';

const UserDetails = ({ match, location, history }) => {
  const [user, setUser] = useState([]);
  const { userId } = match.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUserById(userId)
      .then((res) => {console.log("user list", res); return setUser(res);})
      .finally(() => setLoading(false));
  }, [userId]);

  return loading ? <Loader /> :
  user ? (
    <div className="user-details">
      <div><img src={user.picture} alt="" /></div>
      <div>
        <p>{user.id}</p>
        <p>{user.title} {user.firstName} {user.lastName}</p>
        <p>Gender: {user.gender}</p>
        <p>Birth: {DateFormat(user.dateOfBirth)} </p>
        <p>RegisterDate: {DateFormat(user.registerDate)}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div>
        <p>Country: {user.location.country}</p>
        <p>State: {user.location.state}</p>
        <p>City: {user.location.city}</p>
      </div>
      
      <Link
        to={{
          pathname: `users/${user.id}/post`,
          state: {
            url: this.props.match.path,
          },
        }}
        key={user.id}
      >Get Posts List</Link>
    </div>
  ) : <p>No user defined</p>;
};

export default UserDetails;
