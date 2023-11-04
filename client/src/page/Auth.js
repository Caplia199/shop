import React, { useContext, useState } from 'react';
import { Button, Card, Container, FormControl, InputLabel, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 54px)',
  },
  card: {
    width: 600,
    padding: 5,
  },
  formControl: {
    marginTop: 4,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 4,
    paddingLeft: 3,
    paddingRight: 3,
  },
};

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useNavigate();

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(user);
      user.setIsAuth(true);
      history(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container sx={styles.container}>
      <Card sx={styles.card}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </Typography>
        <FormControl component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            sx={styles.formControl}
            label="Введите Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={styles.formControl}
            label="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div sx={styles.row}>
            {isLogin ? (
              <Typography>
                Еще не зарегистрированы?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
              </Typography>
            ) : (
              <Typography>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </Typography>
            )}
            <Button variant="outlined" onClick={click}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </div>
        </FormControl>
      </Card>
    </Container>
  );
});

export default Auth;
