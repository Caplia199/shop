import React from 'react';
import { Card, Image, Col } from 'react-bootstrap';

const DeviceItem = ({device}) => {

  return (
    <Col md={3} className='mt-3'>
        <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
            <Image width={150} height={150} src={device.img}/>
            <div className='d-flex justify-content-between align-items-center mt-1'>
                <div>SAMSUNG</div>
                <div className='d-flex align-items-center'>
                    <div>{device.rating}
                    <span  width={20} height={20}>&#9733;</span>
                    </div>
                </div>
            </div>
            <div>{device.name}</div>
        </Card>
    </Col>
  )
};

export default DeviceItem;
