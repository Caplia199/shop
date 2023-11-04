import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({ name: value }).then((data) => {
            setValue('');
            onHide();
        });
    };

    return (
        <Modal open={show} onClose={onHide}>
            <div style={{ padding: 16, width: 400, backgroundColor: 'white' }}>
                <h5>Добавить новый бренд</h5>
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="Введите название"
                    fullWidth
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                    <Button variant="outlined" onClick={onHide} color="error">
                        Отменить
                    </Button>
                    <Button variant="outlined" onClick={addBrand} color="success">
                        Добавить
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default CreateBrand;
