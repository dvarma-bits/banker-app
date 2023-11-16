// transaction-service.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3003;

app.use(bodyParser.json());

// Mock transaction data (in a real-world scenario, use a database)
const transactions = [];

// Deposit funds
app.post('/v1/transactions/deposit', (req, res) => {
  // In a real-world scenario, handle deposit transaction and update account balance
  res.json({ message: 'Deposit successful' });
});

// Withdraw funds
app.post('/v1/transactions/withdraw', (req, res) => {
  // In a real-world scenario, handle withdrawal transaction and update account balance
  res.json({ message: 'Withdrawal successful' });
});

// Transfer funds
app.post('/v1/transactions/transfer', (req, res) => {
  // In a real-world scenario, handle transfer transaction and update account balances
  res.json({ message: 'Transfer successful' });
});

app.listen(PORT, () => {
  console.log(`Transaction service is running on http://localhost:${PORT}`);
});
