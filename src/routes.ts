// pages
import { Login, Home, Reports, Settings } from './pages';

// other
import { FC } from 'react';

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  needsLogin: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: 'login-route',
    title: 'Login',
    path: '/login',
    needsLogin: false,
    component: Login,
  },
  {
    key: 'home-route',
    title: 'Dashboard',
    path: '/',
    needsLogin: true,
    component: Home,
  },
  {
    key: 'reports-route',
    title: 'Reports',
    path: '/reports',
    needsLogin: true,
    component: Reports,
  },
  {
    key: 'settings-route',
    title: 'Settings',
    path: '/settings',
    needsLogin: true,
    component: Settings,
  },
];
