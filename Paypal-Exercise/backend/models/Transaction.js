const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  payer: String,
  payee: String,
  amount: Number,

  // CLASS EXERCISE FIELD
  note: { type: String, default: '' }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
