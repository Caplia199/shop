import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {

    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Название магазина</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'}>Админ</Button>
                    <Button variant={'outline-light'}>Выйти</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизоваться</Button>
                </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default NavBar;
