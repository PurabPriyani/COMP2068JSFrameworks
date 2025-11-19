const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  payer: { type: String, required: true },
  payee: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);