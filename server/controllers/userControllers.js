const { User, Basket } = require('../modules/models');
const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '12h'}
        );
};

class UserControllers {

    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный Email или Password'));
        };
        const candidate = await User.findOne({where: {email}});
        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким Email уже существует'));
        };
        const hashPassword = await bcrypt.hash(password, 5);
        const createUser = await User.create({email, password: hashPassword, role});
        const createBasket = await Basket.create({userId: createUser.id});
        const token = generateToken(createUser.id, email, createUser.role);
        return res.json({token});

    };

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) {
            return next(ApiError.internal('Пользователь с таким именем не зарегестрирован'));
        };
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return next(ApiError.internal('Неправильный пароль'));
        };
        const token = generateToken(user.id, email, user.role);
        return res.json({token});

    };

    async checkAuth(req, res, next) {
        const token = generateToken(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    };

};

module.exports = new UserControllers;