const { Brand } = require('../modules/models')
const ApiError = require('../error/apiError')

class BrandControllers {

    async allBrands(req, res) {
        const allBrands = await Brand.findAll();
        return res.json(allBrands);
    };

    async addBrand(req, res) {
        const {name} = req.body;
        const addBrand = await Brand.create({name});
        return res.json(addBrand);
    };

};

module.exports = new BrandControllers;