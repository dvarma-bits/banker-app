// profile-service.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3004;

app.use(bodyParser.json());

// Mock profile data (in a real-world scenario, use a database)
const profiles = [
  { userId: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
  // Additional user profiles...
];

// Get user profile
app.get('/v1/profile', (req, res) => {
  const userId = req.query.userId; // Assuming user ID is passed as a query parameter

  const userProfile = profiles.find((profile) => profile.userId === parseInt(userId, 10));

  if (userProfile) {
    res.json(userProfile);
  } else {
    res.status(404).json({ message: 'Profile not found' });
  }
});

// Update user profile
app.put('/v1/profile/update', (req, res) => {
  // In a real-world scenario, handle profile update and store in the database
  res.json({ message: 'Profile updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Profile service is running on http://localhost:${PORT}`);
});
