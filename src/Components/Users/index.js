import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShortUserInfo from '../ShortUserInfo';
import { getAllUsers } from '../../db';

class Users extends Component {
  state = {
    userList: []
  };
  componentDidMount() {
    getAllUsers().then(res => {console.log(res.data);
      return this.setState({
        userList: res.data
      });
    });
  }

  render() {console.log(this.props);
    const { userList } = this.state;
    const { url } = this.props.match;

    return (
      <div className="users">
        <h3>Users Page</h3>
        
        <div className="users-wrapper">
          <div>
            <div className="user-list">
              {userList
                .map(({ id, title, lastName, firstName, picture, email }) => ( 
                    <div className="userInfo">
                      <ShortUserInfo 
                        title={title} 
                        lastName={lastName} 
                        firstName={firstName} 
                        email={email} 
                        picture={picture}/>
                      <Link
                        to={{
                          pathname: `$users/${id}`,
                          state: {
                            url: this.props.match.path,
                          },
                        }}
                        key={id}
                      ><p>Get Full Profile</p></Link>
                      <Link
                        to={{
                          pathname: `users/${id}/post`,
                          
                        }}
                        key={id}
                      ><p>Get Posts List</p></Link>
                    </div>  
                 
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
