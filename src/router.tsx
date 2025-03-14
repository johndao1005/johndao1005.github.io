import React, { JSX } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

// Layouts
import MainLayout from './ulti/MainLayout';
import { RouteItem } from 'constant/interface';



export const routerMap: RouteItem[] = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
    exact: true
  },
  {
    name: 'About',
    path: '/about',
    component: <About />
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: <Portfolio />
  },
  {
    name: 'Contact',
    path: '/contact',
    component: <Resume />
  }
];


const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {routerMap
            .filter((item) => item.name !== 'Home')
            .map((item) => (
              <Route key={item.name} path={item.path} element={item.component} />
            ))}
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;