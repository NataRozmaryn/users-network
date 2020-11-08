import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  render() {console.log(this.props);
    const { userList } = this.state;

    return (
      <div className="usersList">
        {userList
          .map(({ id, title, lastName, firstName, picture, email }) => ( 
              <div className="usersList__user" key={id}>
              <img src={picture} alt="" className="usersList__user__picture" />
              <div className="usersList__user__info">
                <p className="usersList__user__id">{id}</p>
                <p className="usersList__user__name">{title}. {lastName} {firstName}</p>
                <p className="usersList__user__email">{email}</p>
              </div>
              <div className="separator"></div>
                <Link
                  to={{
                    pathname: `users/${id}`
                  }}
                ><p>Get Full Profile</p></Link>
                <Link
                  to={{
                    pathname: `users/${id}/posts`,
                  }}
                ><p>Get Posts List</p></Link>
              </div>   
          ))}
      </div>
    );
  }
}

export default Users;
