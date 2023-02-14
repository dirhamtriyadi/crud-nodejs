const crudModel = require('../models/crudModel');

const crudController = {
    index: async (req, res) => {
        const data = await crudModel.findAll();
        res.render('crud', {data: data});
    },
    create: async (req, res) => {
        const data = await crudModel.create({
            nama: req.body.nama,
            email: req.body.email,
            phone: req.body.phone
        });
        res.redirect('/');
    },
    edit: async (req, res) => {
        const data = await crudModel.findOne({
            where: {
                id: req.params.id
            }
        });
        res.render('edit', {data: data});
    },
    update: async (req, res) => {
        const data = await crudModel.update({
            nama: req.body.nama,
            email: req.body.email,
            phone: req.body.phone
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/');
    },
    delete: async (req, res) => {
        const data = await crudModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/');
    }
}

module.exports = crudController;