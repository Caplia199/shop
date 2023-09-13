import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'TYPE 1'},
            {id: 2, name: 'TYPE 2'},
            {id: 3, name: 'TYPE 3'},
            {id: 4, name: 'TYPE 4'}
        ]
        this._brands = [
            {id: 1, name: 'BRAND 1'},
            {id: 2, name: 'BRAND 2'},
            {id: 3, name: 'BRAND 1'},
            {id: 4, name: 'BRAND 1'},
            {id: 5, name: 'BRAND 1'},
            {id: 6, name: 'BRAND 1'},
            {id: 7, name: 'BRAND 1'},
            {id: 8, name: 'BRAND 1'},
            {id: 9, name: 'BRAND 1'},
            {id: 10, name: 'BRAND 1'},
            {id: 11, name: 'BRAND 1'},
            {id: 12, name: 'BRAND 1'},
            {id: 13, name: 'BRAND 1'},
            {id: 14, name: 'BRAND 1'},
            {id: 15, name: 'BRAND 1'},
            {id: 17, name: 'BRAND 1'},
            {id: 18, name: 'BRAND 1'},
            {id: 19, name: 'BRAND 1'},
            {id: 20, name: 'BRAND 1'},
            {id: 21, name: 'BRAND 1'},
            {id: 22, name: 'BRAND 1'},
            

        ]
        this._device = [
            {id: 1, name: 'DEVICE 1', price: 1000, rating: 5, img: 'IMG 1'},
            {id: 2, name: 'DEVICE 2', price: 2000, rating: 5, img: 'IMG 2'},
            {id: 2, name: 'DEVICE 3', price: 3000, rating: 5, img: 'IMG 3'},
            {id: 3, name: 'DEVICE 1', price: 1000, rating: 5, img: 'IMG 1'},
            {id: 4, name: 'DEVICE 2', price: 2000, rating: 5, img: 'IMG 2'},
            {id: 5, name: 'DEVICE 1', price: 1000, rating: 5, img: 'IMG 1'},
            {id: 6, name: 'DEVICE 2', price: 2000, rating: 5, img: 'IMG 2'},
            {id: 7, name: 'DEVICE 1', price: 1000, rating: 5, img: 'IMG 1'},
            {id: 8, name: 'DEVICE 2', price: 2000, rating: 5, img: 'IMG 2'},
            {id: 9, name: 'DEVICE 1', price: 1000, rating: 5, img: 'IMG 1'},
            {id: 10, name: 'DEVICE 2', price: 2000, rating: 5, img: 'IMG 2'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type) {
        this._selectedType = type
    };

    setSelectedBrand(brand) {
        this._selectedBrand = brand
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

    get selectedType() {
        return this._selectedType
    };

    get selectedBrand() {
        return this._selectedBrand
    };

};