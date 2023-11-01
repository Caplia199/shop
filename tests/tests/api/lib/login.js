const { expect } = require('@playwright/test');

export default class Auth {
    constructor(login, password) {
      this.login = login;
      this.password = password;
    }
  
    async loginAccount() {
        let login = await request.post(`http://localhost:5000/api/user/login`, {
        data: {
            "email": this.login,
            "password": this.password
            }
        });

        expect(login.status()).toBe(200);
    };
};

