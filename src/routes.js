// import { lazy } from 'react';
import Home from './Components/Home';
import Users from './Components/UsersList/Users';
import UserDetails from './Components/UsersDetails/UserDetails';
import PostsList from './Components/PostsList/PostsList';
import PostsByTag from './Components/PostsByTag';
import TagsList from './Components/TagsList';
import CommentsList from './Components/Comment/CommentsList';
import UserPosts from './Components/UserPosts/UserPosts.js';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUpForm from './Components/LoginForm/SignUp';
import UserDataForm from './Components/LoginForm/UserDataForm';

const route = [
  {
    path: '/',
    label: 'Home',
    isExact: true,
    isInMenu: true,
    needsAuth: false,
    component: Home,
  },
  {
    path: '/users',
    label: 'Users List',
    isExact: true,
    isInMenu: true,
    needsAuth: true,
    component: Users,
  },
  {
    path: '/users/:userId',
    label: 'User Details',
    isExact: true,
    isInMenu: false,
    needsAuth: true,
    component: UserDetails,
  },
  {
    path: '/users/:userId/posts',
    label: 'User Posts',
    isExact: true,
    isInMenu: false,
    needsAuth: true,
    component: UserPosts,
  },
  {
    path: '/posts',
    label: 'Posts List',
    isExact: true,
    isInMenu: true,
    needsAuth: true,
    component: PostsList,
  },
  {
    path: '/posts/:postId',
    label: 'Post Comments',
    isExact: true,
    isInMenu: false,
    needsAuth: true,
    component: CommentsList,
  },
  {
    path: '/tags',
    label: 'Tag List',
    isExact: true,
    isInMenu: true,
    needsAuth: true,
    component: TagsList,
  },
  {
    path: '/tags/:tagTitle',
    label: 'Posts by Tag',
    isExact: true,
    isInMenu: false,
    needsAuth: true,
    component: PostsByTag,
  },
  {
    path: '/signup',
    label: 'Sign up',
    isExact: true,
    isInMenu: false,
    needsAuth: false,
    component: SignUpForm,
  },
  {
    path: '/login',
    label: 'Login',
    isExact: true,
    isInMenu: false,
    needsAuth: false,
    component: LoginForm,
  },
  {
    path: '/userdata',
    label: 'User Data',
    isExact: true,
    isInMenu: false,
    needsAuth: true,
    component: UserDataForm,
  }
];

export default route;