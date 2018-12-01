const mongoose = require('mongoose');

const prepostoSchema = new mongoose.Schema({
    documento: String,
    nome: {
        type: String,
        required: true
    },
    telefone: String,
    email: String,
    endereco: String,
    regiao: String,
    comissao: String,
    observacao: String
}, {timestamps: true});
const preposto = mongoose.model('prepostos', prepostoSchema);

module.exports = preposto;
