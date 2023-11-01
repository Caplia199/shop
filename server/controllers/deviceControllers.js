const { Device, DeviceInfo } = require('../modules/models')
const ApiError = require('../error/apiError')
const uuid = require('uuid');
const path = require('path');

class DeviceControllers {

    async allDevices(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let allDevices;
        if(!brandId && !typeId){
            allDevices = await Device.findAndCountAll({limit, offset});
        } else if(brandId && typeId){
            allDevices = await Device.findAndCountAll({where:{typeId, brandId}}, limit, offset);
        } else if(!brandId && typeId){
            allDevices = await Device.findAndCountAll({where:{typeId}}, limit, offset);
        } else if(brandId && !typeId){
            allDevices = await Device.findAndCountAll({where:{brandId}}, limit, offset);
        }
        return res.json(allDevices);
    };

    async deviceById(req, res) {
        const {id} = req.params;
        const deviceById = await Device.findOne({
            where:{id},
            include: [{model: DeviceInfo, as: 'info'}]
        });
        return res.json(deviceById);
    };

    async deleteDeviceById(req, res) {
        const {id} = req.params;
        const deviceById = await Device.decrement({
            where:{id},
            // include: [{model: DeviceInfo, as: 'info'}]
        });
        return res.json(deviceById);
    };

    async addDevice(req, res, next) {
        try {
            const {name, price, brandId, typeId, info: infoData} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpeg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const addDevice = await Device.create({name, price, brandId, typeId, img: fileName});

            if(infoData) {
                const info = JSON.parse(infoData)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        id: addDevice.id
                    });
                });
            };

            return res.json(addDevice);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    };

};

module.exports = new DeviceControllers;