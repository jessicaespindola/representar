// API de pedidos

const createCrud = require('../utils/create-crud');

module.exports = function (app) {
    createCrud(app, 'pedidos');
}