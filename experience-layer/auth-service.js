// auth-service.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Mock user data (in a real-world scenario, use a database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Login endpoint
app.post('/v1/auth/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // In a real-world scenario, generate and send a JWT token
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
app.post('/v1/auth/getToken', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // In a real-world scenario, generate and send a JWT token
    res.json({ AccessToken: '12345' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
// Logout endpoint
app.post('/api/auth/logout', (req, res) => {
  // In a real-world scenario, handle token invalidation
  res.json({ message: 'Logout successful' });
});

// Registration endpoint
app.post('/api/auth/register', (req, res) => {
  // In a real-world scenario, handle user registration and store in the database
  res.json({ message: 'Registration successful' });
});

app.listen(PORT, () => {
  console.log(`Authentication service is running on http://localhost:${PORT}`);
});
