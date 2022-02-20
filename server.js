const express = require('express');
const app = express();
const server = require('http').Server(app);

const products = require('./controllers/product-controller');
const users = require('./controllers/user-controller');

app.use(express.json());

const appHome = (req, res) => {
  res
    .status(200)
    .send(
      'YOU HAVE REACHED YOUR SERVER'
    );
};

// Just for testing
app.get('/', appHome);

//* API routes
app.use('/products', products);
app.use('/users', users);

const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`App started and is running on port ${port}`);
});