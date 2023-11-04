import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(DEVICE_ROUTE + '/' + device.id);
    };

    return (
        <Grid item xs={6} sm={4} md={3} onClick={handleClick} style={{ cursor: 'pointer' }}>
            <Card>
                <CardMedia
                    component="img"
                    height="150"
                    image={`http://localhost:5000/${device.img}`}
                    alt={device.name}
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {device.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        SAMSUNG
                    </Typography>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                        <div>
                            {device.rating}
                            <span style={{ fontSize: 20 }}>&#9733;</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DeviceItem;
