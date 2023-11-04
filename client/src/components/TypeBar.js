import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { List, ListItem, ListItemText } from '@mui/material';

const TypeBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <List>
            {device.types.map((type) => (
                <ListItem
                    button
                    key={type.id}
                    selected={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    <ListItemText primary={type.name} />
                </ListItem>
            ))}
        </List>
    );
});

export default TypeBar;
