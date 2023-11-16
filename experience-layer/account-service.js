// account-service.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;

app.use(bodyParser.json());

// Mock account data (in a real-world scenario, use a database)
const accounts = [
  { id: 1, userId: 1, type: 'checking', balance: 1000 },
  { id: 2, userId: 1, type: 'savings', balance: 5000 },
  { id: 3, userId: 2, type: 'checking', balance: 1000 },
  { id: 4, userId: 2, type: 'savings', balance: 5000 }
];

// Get user accounts
app.get('/v1/accounts', (req, res) => {
  const userId = req.query.userId; // Assuming user ID is passed as a query parameter

  const userAccounts = accounts.filter((acc) => acc.userId === parseInt(userId, 10));
  res.json(userAccounts);
});

// Get account details
app.get('/v1/accounts/:accountId', (req, res) => {
  const accountId = parseInt(req.params.accountId, 10);
  const account = accounts.find((acc) => acc.id === accountId);

  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
});

// Create a new account
app.post('/v1/accounts/create', (req, res) => {
  // In a real-world scenario, handle account creation and store in the database
  res.json({ message: 'Account created successfully' });
});

app.listen(PORT, () => {
  console.log(`Account service is running on http://localhost:${PORT}`);
});
