import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

import { getAllUsers } from '../../db';
import './UsersList.scss';

class Users extends Component {
  state = {
    userList: []
  };
  componentDidMount() {
    getAllUsers().then(res => {console.log('users list', res.data);
      return this.setState({
        userList: res.data
      });
    });
  }

  render() {
  const { userList } = this.state;

    return (
      <div className="usersList">
        {userList
          .map(({ id, title, lastName, firstName, picture, email }) => (
            <div className="usersList__user" key={id}>
            <Link to={`/users/${id}`}
            >
              <UserInfo picture={picture} title={title} lastName={lastName} firstName={firstName} email={email} /> 
            </Link> 
            <div className="separator"></div> 
            <Link to={`/users/${id}/posts`}
            ><p>Get Posts List</p></Link>
            </div> 
          ))}
      </div>
    );
  }
}

export default Users;