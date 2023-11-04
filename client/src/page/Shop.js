import React, { useContext, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchBrands, fetchDevice, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevice(null, null, 1, 3).then((data) => {
      device.setDevice(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 2).then((data) => {
      device.setDevice(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        <Grid item md={3}>
          <TypeBar />
        </Grid>
        <Grid item md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Grid>
      </Grid>
    </Container>
  );
});

export default Shop;
