const Router = require('express');
const router = new Router;
const deviceControllers = require('../../controllers/deviceControllers')

router.get('/', deviceControllers.allDevices);
router.get('/:id', deviceControllers.deviceById);
router.post('/', deviceControllers.addDevice);

module.exports = router;
