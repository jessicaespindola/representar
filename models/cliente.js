const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    documento: String,
    
    nome: {
        type: String,
        required: true
    },
    telefone: String,
    email: String,
    regiao: String,
    preposto: String,
    observacao: String   
}, {timestamps: true});
const cliente = mongoose.model('clientes', clienteSchema);

module.exports = cliente;
