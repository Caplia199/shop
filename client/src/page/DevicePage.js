import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {

  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, [id]);

  return (
    <Container sx={{ mt: 3 }}>
      <Grid container>
        <Grid item md={4}>
          <img
            width={300}
            height={300}
            src={`http://localhost:5000/${device.img}`}
          />
        </Grid>
        <Grid item md={4}>
          <Typography variant="h4">{device.name}</Typography>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ fontSize: 30 }}
          >
            <Typography>Рейтинг: {device.rating}</Typography>
            <Typography fontSize={20}>&#9733;</Typography>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 300,
              height: 300,
              fontSize: 30,
              border: '5px solid lightgray',
            }}
          >
            <Typography variant="h5">От: {device.price} рублей</Typography>
            <Button variant="outlined">Добавить в корзину</Button>
          </Card>
        </Grid>
      </Grid>
      <Grid container direction="column" sx={{ mt: 2 }}>
        <Typography variant="h5">Характеристики</Typography>
        {device.info.map((info, index) => (
          <Grid
            key={info.id}
            container
            sx={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 2,
            }}
          >
            <Typography>{info.title}: {info.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DevicePage;
