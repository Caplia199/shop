import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'TYPE 1'},
            {id: 2, name: 'TYPE 1'}
        ]
        this._brands = [
            {id: 1, name: 'BRAND 1'},
            {id: 2, name: 'BRAND 2'}
        ]
        this._device = [
            {id: 1, name: 'DEVICE 1', price: 1000, rating: 5, img: 'IMG 1'},
            {id: 2, name: 'DEVICE 2', price: 2000, rating: 5, img: 'IMG 2'},
            {id: 2, name: 'DEVICE 3', price: 3000, rating: 5, img: 'IMG 3'}
        ]
        makeAutoObservable(this)
    };

    setTypes(types) {
        this._types = types
    };

    setBrands(brands) {
        this._brands = brands
    };

    setDevice(device) {
        this._device = device
    };

    get types() {
        return this._types
    };

    get brands() {
        return this._brands
    };

    get device() {
        return this._device
    };
};