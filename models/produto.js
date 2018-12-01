const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    codigo: String,
    descricao: {
        type: String,
        required: true
    },
    preco: Number,
    quantidade: {
        type: Number,
        required: true
    } ,
    tamanho: {
        type: String,
        required: true
    },
    unidadeMedida: String        
}, {timestamps: true});
const produto = mongoose.model('produtos', produtoSchema);

module.exports = produto;