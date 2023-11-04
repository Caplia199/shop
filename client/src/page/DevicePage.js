import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviseAPI';

const DevicePage = () => {

    const [device, setDevice] = useState({info:[]});
    const {id} = useParams();

    useEffect( () => {
        fetchOneDevice(id).then( data => setDevice(data));
    }, [id]);

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={"http://localhost:5000/" + device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                      <h2>{device.name}</h2>
                      <Row className='d-flex align-items-center justify-content-center' style={{fontSize:30}}>
                          <div>Рейтинг: {device.rating}
                              <span  width={20} height={20}>&#9733;</span>
                          </div>
                      </Row>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex align-items-center justify-content-around' 
                        style={{width:300, height:300, fontSize:30, border:'5px solid lightgray'}}
                        >
                        <h3>От: {device.price} рублей</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-2'>
                <h2>Характеристики</h2>
                {device.info.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row> 
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;
