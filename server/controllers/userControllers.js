const { User } = require('../modules/models')
const ApiError = require('../error/apiError')

class UserControllers {

    async registration(req, res) {

    };

    async login(req, res) {

    };

    async checkAuth(req, res, next) {
        const {id} = req.query;
        if(!id) {
            return next(ApiError.badRequest('Отсутствует ID!'))
        }
        res.json(id);
    };

};

module.exports = new UserControllers;