import React from 'react';
import { Card, Image, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import deviceImage from '../assets/5eda5ea1-e257-495b-bf75-24690747eb40.jpeg';

const DeviceItem = ({device}) => {

    const navigate = useNavigate();

    return (
        <Col md={3} className='mt-3' onClick={() => {navigate(DEVICE_ROUTE + '/' + device.id)}}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={"http://localhost:5000/" + device.img}/>
                <div className='d-flex justify-content-between align-items-center mt-1'>
                    <div>SAMSUNG</div>
                    <div className='d-flex align-items-center'>
                        <div>
                            {device.rating}
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
