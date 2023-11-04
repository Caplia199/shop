import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, TextField, Select, MenuItem, Grid, Paper, Typography, IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import { Context } from '../../index';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);

    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrands().then((data) => device.setBrands(data));
    }, []);

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const deleteInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
    };

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));

        createDevice(formData).then((data) => onHide());
    };

    return (
        <Modal open={show} onClose={onHide}>
            <Container>
                <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
                    <Typography variant="h6" gutterBottom>
                        Добавить новый девайс
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Select
                                value={device.selectedType.name || ''}
                                onChange={(e) => device.setSelectedType(e.target.value)}
                                fullWidth
                            >
                                {device.types.map((type) => (
                                    <MenuItem key={type.id} value={type.name}>
                                        {type.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Select
                                value={device.selectedBrand.name || ''}
                                onChange={(e) => device.setSelectedBrand(e.target.value)}
                                fullWidth
                            >
                                {device.brands.map((brand) => (
                                    <MenuItem key={brand.id} value={brand.name}>
                                        {brand.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                label="Название устройства"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                fullWidth
                                label="Стоимость устройства"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input type="file" onChange={selectFile} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                onClick={addInfo}
                            >
                                Добавить новое свойство
                            </Button>
                            {info.map((i) => (
                                <Grid
                                    container
                                    spacing={2}
                                    key={i.number}
                                >
                                    <Grid item xs={4}>
                                        <TextField
                                            value={i.title}
                                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                            label="Название характеристики"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField
                                            value={i.description}
                                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                            label="Описание характеристики"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton onClick={() => deleteInfo(i.number)} color="error">
                                            <Button />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                onClick={onHide}
                            >
                                Отменить
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={addDevice}
                            >
                                Добавить
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Modal>
    );
});

export default CreateDevice;
