import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { Spinner } from 'react-bootstrap';
import { check } from './http/userAPI';

const App = observer(() => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally( () => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spinner animation="border" />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
});

export default App;
