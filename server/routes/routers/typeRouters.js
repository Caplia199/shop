const Router = require('express');
const router = new Router;
const typeControllers = require('../../controllers/typeControllers');
const checRoleMiddleware = require('../../middleware/checRoleMiddleware');

router.get('/', typeControllers.allTypes);
router.post('/', checRoleMiddleware('ADMIN'), typeControllers.addType);

module.exports = router;
