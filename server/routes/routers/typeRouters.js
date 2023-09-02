const Router = require('express');
const router = new Router;
const typeControllers = require('../../controllers/typeControllers')

router.get('/', typeControllers.allTypes);
router.post('/', typeControllers.addType);

module.exports = router;
