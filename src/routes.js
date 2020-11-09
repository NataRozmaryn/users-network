// import { lazy } from 'react';
import Home from './Components/Home';
import Users from './Components/UsersList/UsersList';
import UserDetails from './Components/UsersDetails/UserDetails';
import PostsList from './Components/PostsList/PostsList';
import PostsByTag from './Components/PostsByTag';
import TagsList from './Components/TagsList';
import CommentsList from './Components/Comment/CommentsList';
import UserPosts from './Components/UserPosts/UserPosts.js';

const route = [
  {
    path: '/',
    label: 'Home',
    isExact: true,
    isInMenu: true,
    component: Home,
  },
  {
    path: '/users',
    label: 'Users List',
    isExact: true,
    isInMenu: true,
    component: Users,
  },
  {
    path: '/users/:userId',
    label: 'User Details',
    isExact: true,
    isInMenu: false,
    component: UserDetails,
  },
  {
    path: '/users/:userId/posts',
    label: 'User Posts',
    isExact: false,
    isInMenu: false,
    component: UserPosts,
  },
  {
    path: '/posts',
    label: 'Posts List',
    isExact: true,
    isInMenu: true,
    component: PostsList,
  },
  {
    path: '/posts/:postId',
    label: 'Post Comments',
    isExact: false,
    isInMenu: false,
    component: CommentsList,
  },
  {
    path: '/tags',
    label: 'Tag List',
    isExact: true,
    isInMenu: true,
    component: TagsList,
  },
  {
    path: '/tags/:tagTitle',
    label: 'Posts by Tag',
    isExact: false,
    isInMenu: false,
    component: PostsByTag,
  },
];

export default route;