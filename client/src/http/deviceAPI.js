import { $host, $authHost } from './index'

export const createType = async ( type ) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
};

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
};

export const createBrand = async ( type ) => {
    const {data} = await $authHost.post('api/brand', type);
    return data;
};

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand');
    return data;
};

export const createDevice = async ( type ) => {
    const {data} = await $authHost.post('api/device', type);
    return data;
};

export const fetchDevice = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params:{
        typeId, brandId, page, limit
    }});
    return data;
};

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get(`api/device/${id}`);
    return data;
};

