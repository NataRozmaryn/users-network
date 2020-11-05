import { lazy } from 'react';

const Home = lazy(() =>
  import('./Components/Home')
);
const Users = lazy(() =>
  import('./Components/Users')
);
const UserDetails = lazy(() =>
  import('./Components/UserDetails')
);
const PostsList = lazy(() =>
  import('./Components/PostsList')
);
const PostsByTag = lazy(() =>
  import('./Components/PostsByTag')
);
const TagsList = lazy(() =>
  import('./Components/TagsList')
);
const CommentsList = lazy(() =>
  import('./Components/CommentsList')
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
    isExact: false,
    isInMenu: false,
    component: UserDetails,
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