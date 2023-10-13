import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {

    const navigate = useNavigate();
    const {user} = useContext(Context);

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Название магазина</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => {navigate(ADMIN_ROUTE)}}>Админ</Button>
                    <Button variant={'outline-light'} onClick={() => logout()}>Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизоваться</Button>
                </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default NavBar;
