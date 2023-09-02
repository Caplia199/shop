const Router = require('express');
const router = new Router;
const brandRouters = require('./routers/brandRouters');
const deviceRouters = require('./routers/deviceRouters');
const typeRouters = require('./routers/typeRouters');
const userRouters = require('./routers/userRouters');

router.use('/brand', brandRouters);
router.use('/device', deviceRouters);
router.use('/type', typeRouters);
router.use('/user', userRouters);

module.exports = router;
