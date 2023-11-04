import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    mt: 4,
    p: 2,
  },
};

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);

    return (
        <Container sx={styles.container}>
            <Button 
                variant='outlined' 
                sx={styles.button}
                onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button 
                variant='outlined' 
                sx={styles.button}
                onClick={() => setBrandVisible(true)}>
                Добавить бренд
            </Button>
            <Button 
                variant='outlined' 
                sx={styles.button}
                onClick={() => setDeviceVisible(true)}>
                Добавить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
}

export default Admin;
