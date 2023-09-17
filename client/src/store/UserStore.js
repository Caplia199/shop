import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAith = true
        this._user = {}
        makeAutoObservable(this)
    };

    setIsAuth(bool) {
        this._isAith = bool
    };

    setUser(user) {
        this._user = user
    };

    get isAuth() {
        return this._isAith
    };

    get user() {
        return this._user
    };
};