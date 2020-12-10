import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import WithFetchData from '../HOC/WithFetchData';
import { getAllUsers } from '../../db';

const UsersList = ({ data: userList, search, highlight }) => {
    console.log("usersWithFetch", userList, search, highlight);
    console.log("highlight", highlight, search);
    const [userlist, setList] = useState(userList);
    useEffect(() => {
        if (highlight) {
            setList(userList.map((item) => {
                let firstName = item.firstName.toLowerCase();
                let lastName = item.lastName.toLowerCase();
                let searchStr = highlight.toLowerCase();

                if (lastName.indexOf(searchStr) !== -1 || firstName.indexOf(searchStr) !== -1) {
                    item.highlight = "highlight"
                } else {
                    item.highlight = ""
                }

                return item;
            }
            ));
        }
    }, [highlight, userList]);
    useEffect(() => {
        setList(userList.filter((item) => {
            let firstName = item.firstName.toLowerCase();
            let lastName = item.lastName.toLowerCase();
            let searchStr = search.toLowerCase();
            return lastName.indexOf(searchStr) !== -1 ||
                firstName.indexOf(searchStr) !== -1
        }));
    }, [search, userList]);

    return (
        <>
            {userlist && userlist
                .map(({ id, title, lastName, firstName, picture, email, highlight }) => (
                    <div className="usersList__user" style={{ boxShadow: highlight && "5px 10px #888888" }} key={id}>
                        <Link to={`/users/${id}`}>
                            <UserInfo picture={picture} title={title} lastName={lastName} firstName={firstName} email={email} />
                        </Link>
                        <div className="separator"></div>
                        <Link to={`/users/${id}/posts`}><p>Get Posts List</p></Link>
                    </div>
                ))}
        </>
    )
}
export default UsersList;

export let UserListWithData = WithFetchData(getAllUsers)(UsersList);