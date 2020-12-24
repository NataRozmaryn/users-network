import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import WithFetchData from '../HOC/WithFetchData';
import { getAllUsers } from '../../db';

const UsersList = ({ data: userList, search, highlight }) => {
    console.log("usersWithFetch", userList, search, highlight);
    console.log("highlight", highlight, search);
    const [userlist, setList] = useState(userList);
    const [highlightList, sethighlightList] = useState(userList);

//     const highlightList1 = userList.filter((item) => {
//             let firstName = item.firstName.toLowerCase();
//             let lastName = item.lastName.toLowerCase();
//             let searchStr = highlight.toLowerCase();

//             item.highlight = lastName.indexOf(searchStr) !== -1 || firstName.indexOf(searchStr) !== -1
//             // sethighlightList(highlightList.push(item.id));
//             return item;
//         }
//     ).map(item => item.id);
 
//     useEffect(() => {
//         if (highlight) {
//             setList(userList.map((item) => {
//                 let firstName = item.firstName.toLowerCase();
//                 let lastName = item.lastName.toLowerCase();
//                 let searchStr = highlight.toLowerCase();

//                 item.highlight = lastName.indexOf(searchStr) !== -1 || firstName.indexOf(searchStr) !== -1
//                 sethighlightList(highlightList.push(item.id));
//                 return item;
//             }
//             ));
//         }
//     }, [highlight, userList]);
//     let filtered = useMemo(() => {
//         setList(userList.filter((item) => {
//             let firstName = item.firstName.toLowerCase();
//             let lastName = item.lastName.toLowerCase();
//             let searchStr = search.toLowerCase();
//             return lastName.indexOf(searchStr) !== -1 ||
//                 firstName.indexOf(searchStr) !== -1
//         }));
//     }, [search]);
//     const isHighlight = (id) => {
//     return !!highlightList[id];
//     // style={{ boxShadow: highlight && "5px 10px #888888" }} key={id}
// }

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
//     return (
//         <>
//             {userlist && userlist.map(({ id, title, lastName, firstName, picture, email, highlight }) => {
//                     const className=`usersList__user${highlight ? "usersList__user$highlight" : ""}`;
//                     return (
//                     <div className="className">
//                         <Link to={`/users/${id}`}>
//                             <UserInfo picture={picture} title={title} lastName={lastName} firstName={firstName} email={email} />
//                         </Link>
//                         <div className="separator"></div>
//                         <Link to={`/users/${id}/posts`}><p>Get Posts List</p></Link>
//                     </div>
//                     )
//                     })}
//         </>
//     )
// }
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

export const UserListWithData = WithFetchData(getAllUsers, true)(UsersList);