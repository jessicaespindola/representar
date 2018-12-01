const mongoose = require('mongoose');

const fornecedorSchema = new mongoose.Schema({
    documento: String,
    nome: {
        type: String,
        required: true
    },
    telefone: String,
    email: String,
    ramo: String,
    observacao: String

}, {timestamps: true});
const fornecedor = mongoose.model('fornecedores', fornecedorSchema);

module.exports = fornecedor;
