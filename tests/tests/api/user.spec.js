const { test, expect } = require('@playwright/test');
import Auth from'./lib/login';
import Registration from'./lib/registration';

const auth = new Auth;
const registration = new Registration;

// login
test('Login', async () => {
    await auth.loginAccount("qw","12");
});

test('Login with invalid email', async () => {
    await auth.loginAccount("qqq","12");
});

test('Login with invalid password', async () => {
    await auth.loginAccount("qw","123123");
});

// registration
test('Registration', async () => {
    await registration.registration("qw","12");
});

test('Registration with invalid email', async () => {
    await registration.registration("qqq","12");
});

test('Registration with invalid password', async () => {
    await registration.registration("qw","123123");
});