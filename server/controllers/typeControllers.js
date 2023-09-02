const { Type } = require('../modules/models')
const ApiError = require('../error/apiError')

class TypeControllers {

    async allTypes(req, res) {
        const allTypes = await Type.findAll();
        return res.json(allTypes);
    };

    async addType(req, res) {
        const {name} = req.body;
        const addType = await Type.create({name});
        return res.json(addType);
    };

};

module.exports = new TypeControllers;