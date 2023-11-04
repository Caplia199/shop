import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { Context } from '../index';
import { Container, Paper } from '@mui/material';

const AppRouter = () => {
  const location = useLocation();

  const isPathMatchingRoute = (path) => {
    return [...authRoutes, ...publicRoutes].some((route) => route.path === path);
  };

  const { user } = useContext(Context);

  return (
    <Container>
      <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
        <Routes>
          {isPathMatchingRoute(location.pathname) ? null : (
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace={true} />} />
          )}
          {user.isAuth &&
            authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Paper>
    </Container>
  );
};

export default AppRouter;
