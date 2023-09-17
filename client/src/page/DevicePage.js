import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import deviceImage from '../assets/5eda5ea1-e257-495b-bf75-24690747eb40.jpeg';

const DevicePage = () => {

    const device = {id: 1, name: 'Samsung Galaxy S22', price: 1000, rating: 5, img: deviceImage};
    const description = [
      {id: 1, title: 'Оперативная память', description: '5 гб'},
      {id: 2, title: 'Камера', description: '480 мп'},
      {id: 3, title: 'Процессор', description: 'core i9'},
      {id: 4, title: 'Аккумулятор', description: 'есть'},
      {id: 5, title: 'Хороший?', description: 'ДА'}
    ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
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
                {description.map((info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row> 
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;
