import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from '@mui/material';
import { Context } from '../index';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    return (
        <Grid container spacing={2}>
            {device.device.map((device) => (
                <DeviceItem key={device.id} device={device} />
            ))}
        </Grid>
    );
});

export default DeviceList;
