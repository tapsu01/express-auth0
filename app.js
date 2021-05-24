const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';

const routes = require('./routes');
app.use(routes);

/**
 * App Configuration
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
