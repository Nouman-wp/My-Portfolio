const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');
require('dotenv').config();

connectDB(); // connect to MongoDB

// Set view engine and views path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files and parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
