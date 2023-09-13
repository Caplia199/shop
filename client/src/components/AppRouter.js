import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { Context } from '../index';

const AppRouter = () => {
  const location = useLocation();

  const isPathMatchingRoute = (path) => {
    return [...authRoutes, ...publicRoutes].some((route) => route.path === path);
  };

  const {user} = useContext(Context)

  return (
    <Routes>
      {isPathMatchingRoute(location.pathname) ? null : (
        <Route path="*" element={<Navigate to={SHOP_ROUTE} replace={true} />} />
      )}
      {user.isAuth && authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
