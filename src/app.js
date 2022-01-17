
// Load the Express Package
const express = require('express');
// Initualize 
const app = express();

// Configuring body parser middleware
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure the CORS
const cors = require('cors');
app.use(cors());

//Import the Routes
const userRoute = require('./api/routes/user');
app.use('/users', userRoute);



// Setup -
const port = 3200;

//Initial page loaded what should it do. 
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Run on Port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

module.exports = app;

