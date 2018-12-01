const mongoose = require('mongoose');

const transportadoraSchema = new mongoose.Schema({
    documento: String,
    nome: {
        type: String,
        required: true
    },
    telefone: String,
    email: String,
    endereco: String,
    veiculos: String,
    capacidade: String
}, {timestamps: true});
const transportadora = mongoose.model('transportadoras', transportadoraSchema);

module.exports = transportadora;
