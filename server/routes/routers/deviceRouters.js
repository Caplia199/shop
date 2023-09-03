const Router = require('express');
const router = new Router;
const deviceControllers = require('../../controllers/deviceControllers')
const checRoleMiddleware = require('../../middleware/checRoleMiddleware');

router.get('/', deviceControllers.allDevices);
router.get('/:id', deviceControllers.deviceById);
router.post('/', checRoleMiddleware('ADMIN'), deviceControllers.addDevice);

module.exports = router;
