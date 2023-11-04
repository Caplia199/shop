import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('');

    const addType = () => {
        createType({ name: value }).then((data) => {
            setValue('');
            onHide();
        });
    };

    return (
        <Dialog open={show} onClose={onHide} fullWidth maxWidth="sm">
            <DialogTitle>Добавить новый тип</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        label="Введите название"
                        fullWidth
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={onHide} color="error">
                    Отменить
                </Button>
                <Button variant="outlined" onClick={addType} color="success">
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateType;
