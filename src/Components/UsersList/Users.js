import React, { Component } from 'react';
import Search from '../Search/Search';
import { UserListWithData } from './UsersList';
import './UsersList.scss';

class Users extends Component {
  state = {
    page: 1,
    accumulateData: false,
    filterValue: '',
    highlightValue: ''
  };
  handleClickMoreBtn = () => this.setState({ page: this.state.page + 1, accumulateData: true });

  render() {
    console.log(this.state);
    return (
      <>
        <div className="usersList">
          <Search
            onSearch={(value) => this.setState({ filterValue: value })}
            onSearchChange={(value) => this.setState({ highlightValue: value })} />
          <UserListWithData
            page={this.state.page}
            accumulateData={this.state.accumulateData}
            search={this.state.filterValue}
            highlight={this.state.highlightValue}
          />
        </div>
        <button className="button" onClick={this.handleClickMoreBtn}>Show more</button>
      </>
    );
  }
}

export default Users;