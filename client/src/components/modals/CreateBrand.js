import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const CreateBrand = ({show, onHide}) => {
  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить новый бренд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    placeholder='Введите название'
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant={'outline-danger'} onClick={onHide}>Отменить</Button>
            <Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  );
}

export default CreateBrand;
