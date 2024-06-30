const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = process.env.PORT || 5000;


const dbConfig = {
  user: 'system',
  password: 'developer',
  connectString: 'localhost:1521/xe', 
  poolMin: 10,
  poolMax: 20,
  poolIncrement: 2,
  poolTimeout: 60,

};


async function init() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Oracle DB connection pool created');
  } catch (err) {
    console.error('Error creating Oracle DB connection pool:', err);
    process.exit(1); // Exit process on error
  }
}

// Define routes
const userRoutes = require('./routes/userRoutes'); // Example route setup

// Middleware
app.use(express.json()); // Body parser middleware

// Use routes
app.use('/users', userRoutes); // Mount user routes under /users path

// Start server
async function startServer() {
  await init();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
