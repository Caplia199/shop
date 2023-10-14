import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._device = []
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