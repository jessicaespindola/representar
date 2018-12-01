const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    codigo: {
      type: String,
      required: true
    },
    cliente: {
      type: Schema.Types.ObjectId,
      ref: 'cliente',
      required: true

     },
     fornecedor: {
      type: Schema.Types.ObjectId,
      ref: 'fornecedor',
      required: true

     },
    
    produto: {
      type: Schema.Types.ObjectId,
      ref: 'produto',
      required: true
    },
    
    preposto: {
      type: Schema.Types.ObjectId,
      ref: 'preposto',
      required: true
    },
    valorTotal: {
      type: Number,
      required: true
    }
    
  }, { timestamps: true });
const pedido = mongoose.model('pedidos', pedidoSchema);

module.exports = pedido;