import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Row, Col } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className='d-flex'>
      {device.brands.map((brand) => (
        <Col key={brand.id}>
          <Card
            className='p-3 mb-3'
            onClick={() => device.setSelectedBrand(brand)}
            style={{ cursor: 'pointer' }}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default BrandBar;
