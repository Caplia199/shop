import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import { Context } from '..';

const Pages = observer(() => {

    const {device} = useContext(Context);
    const pageCount = Math.ceil(device.totalCount / device.limit);
    const pages = [];

    for(let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    };

    // const navigate = useNavigate();

    return (
        <Pagination className='mt-5'>
            {pages.map( page => 
                <Pagination.Item
                    active={device.page === page}
                    onClick={ () => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
});

export default Pages;
