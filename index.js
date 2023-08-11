const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router=express.Router({});
const port = 3000;

app.use(bodyParser.json());

const users = [
  { id: 1, name: 'User1' },
  { id: 2, name: 'User2' },
  { id: 3, name: 'User3' },
];

// GET endpoint to retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});
app.get('/health', async (_req, res, _next) => {

  const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
  };
  try {
      res.send(healthcheck);
  } catch (error) {
      healthcheck.message = error;
      res.status(503).send();
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
