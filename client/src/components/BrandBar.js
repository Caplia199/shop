import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Grid } from '@mui/material';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Grid container spacing={2}>
      {device.brands.map((brand) => (
        <Grid item key={brand.id}>
          <Card
            sx={{
              p: 3,
              mb: 3,
              cursor: 'pointer',
              border: brand.id === device.selectedBrand.id ? '2px solid red' : '2px solid lightgray',
            }}
            onClick={() => device.setSelectedBrand(brand)}
          >
            {brand.name}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});

export default BrandBar;
