import React, { useContext } from 'react';
import { Context } from '../index';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const navigate = useNavigate();
    const { user } = useContext(Context);

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <AppBar position="static" sx={{ bgcolor: 'dark', boxShadow: 0 }}>
            <Container>
                <Toolbar>
                    <NavLink to={SHOP_ROUTE} style={{ color: 'white', textDecoration: 'none' }}>
                        <Typography variant="h6">
                            Название магазина
                        </Typography>
                    </NavLink>
                    {user.isAuth ?
                        <div style={{ marginLeft: 'auto' }}>
                            <Button variant="outlined" onClick={() => { navigate(ADMIN_ROUTE) }}>Админ</Button>
                            <Button variant="outlined" onClick={() => logout()}>Выйти</Button>
                        </div>
                        :
                        <div style={{ marginLeft: 'auto' }}>
                            <Button variant="outlined" onClick={() => navigate(LOGIN_ROUTE)}>Авторизоваться</Button>
                        </div>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
});

export default NavBar;
