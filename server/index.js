// ? Import npm
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// ? Import Local
const connectDatabase = require('./db/index');

// PORT
const PORT = process.env.PORT || 5000;

// APP
const app = express();

// Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true,
});
app.use(urlencodedParser);
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const router = require('./router/index');

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// BDD Connection
connectDatabase();
