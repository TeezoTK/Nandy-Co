import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const Services = lazy(() => import('../pages/services/page'));
const About = lazy(() => import('../pages/about/page'));
const Contact = lazy(() => import('../pages/contact/page'));
const Legal = lazy(() => import('../pages/legal/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/legal',
    element: <Legal />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
