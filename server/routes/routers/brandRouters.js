const Router = require('express');
const router = new Router;
const brandControllers = require('../../controllers/brandControllers')

router.get('/', brandControllers.allBrands);
router.post('/', brandControllers.addBrand);

module.exports = router;
