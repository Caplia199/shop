import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, Dropdown, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviseAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {

    const { device } = useContext(Context);

    const [info, setInfo] = useState([])
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    useEffect( () => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);

    const selectFile = e => {
        setFile(e.target.files[0])
    };

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    };

    const deleteInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    };

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        
        createDevice(formData).then(data => onHide());
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый девайс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => (
                                <Dropdown.Item 
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => (
                                <Dropdown.Item 
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название устройства'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button 
                        variant={'outline-dark'} 
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i => 
                            <Row className='mt-3' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder='Введите название характеристики'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder='Введите описание характеристики'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button 
                                        onClick={() => deleteInfo(i.number)}
                                        variant={'outline-danger'}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>    
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Отменить</Button>
                <Button variant={'outline-success'} onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
