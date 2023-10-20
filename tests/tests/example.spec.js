const { test, expect } = require('@playwright/test');

test('Login', async ({ request }) => {
  
    let login = await request.post(`http://localhost:5000/api/user/login`, {
        data: {
          "email": "qw",
          "password": "12"
      }
    });

    expect(login.status()).toBe(200);
  
});

