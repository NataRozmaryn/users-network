import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

import { getAllUsers } from '../../db';
import WithFetchData from '../HOC/WithFetchData';
import './UsersList.scss';

let page = 1;
class Users extends Component {
  state = {
    page: 1
  };

  // state = {
  //   userList: [],
  //   page: 1
  // };
  // componentDidMount() {
  //   getAllUsers(this.state.page).then(res => {console.log('users list', res.data);
  //     return this.setState({
  //       userList: res.data
  //     });
  //   });
  // }
  handleClickMoreBtn = () => this.setState({ page: this.state.page + 1 });

  render() {
    console.log("usersWithFetch", this.props.data);
    const userList = this.props.data;
    page = this.state.page;
    return (
      <>
        <div className="usersList">
          {userList && userList
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
        <button className="button" onClick={this.handleClickMoreBtn}>Show more</button>
      </>
    );
  }
}

export default WithFetchData(getAllUsers, page)(Users);