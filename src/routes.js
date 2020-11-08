import { lazy } from 'react';

const Home = lazy(() =>
  import('./Components/Home')
);
const Users = lazy(() =>
  import('./Components/UsersList/UsersList')
);
const UserDetails = lazy(() =>
  import('./UsersDetails/UserDetails')
);
const PostsList = lazy(() =>
  import('./Components/PostsList/PostsList')
);
const PostsByTag = lazy(() =>
  import('./Components/PostsByTag')
);
const TagsList = lazy(() =>
  import('./Components/TagsList')
);
const CommentsList = lazy(() =>
  import('./Components/Comment/CommentsList')
);
const UserPosts = lazy(() =>
  import ('./Components/UserPosts/UserPosts.js')
);

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