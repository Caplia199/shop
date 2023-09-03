const Router = require('express');
const router = new Router;
const brandControllers = require('../../controllers/brandControllers')
const checRoleMiddleware = require('../../middleware/checRoleMiddleware');

router.get('/', brandControllers.allBrands);
router.post('/', checRoleMiddleware('ADMIN'), brandControllers.addBrand);

module.exports = router;
