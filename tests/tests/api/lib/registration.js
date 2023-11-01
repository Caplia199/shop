const { expect } = require('@playwright/test');

export default class Registration {
    constructor(login, password) {
      this.login = login;
      this.password = password;
    }
  
    async registration() {
        let login = await request.post(`http://localhost:5000/api/user/registration`, {
        data: {
            "email": this.login,
            "password": this.password
            }
        });

        expect(login.status()).toBe(200);
    };
};