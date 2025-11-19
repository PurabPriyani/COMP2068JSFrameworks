const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dev:paypal123@sample.1x12pgx.mongodb.net/paypal?retryWrites=true&w=majority&appName=sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

app.use('/api/transactions', require('./routes/transactionRoutes'));

app.listen(3000, () => console.log("Server running on port 3000"));