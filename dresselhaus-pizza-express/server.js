//imported express from dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
// initialize the app
const app = express();
// set port from the environment
const PORT = process.env.PORT || 3000;
//listen from theparticular port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
// middlewares interact between res and req
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// our index route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//used routes from the app
const pizzaRoutes = require('./routes/pizza-routes');
app.use('/pizza', pizzaRoutes);
// error handler
app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
