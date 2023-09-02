const Router = require('express');
const router = new Router;
const userControllers = require('../../controllers/userControllers')

router.get('/auth', userControllers.checkAuth);
router.post('/registration', userControllers.registration);
router.post('/login', userControllers.login);

module.exports = router;
