const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

// MIDDLEWARE

app.use(express.json());
console.log(process.env.NODE_ENV);
if ((process.env.NODE_ENV === 'development')) {
  app.use(morgan('dev'));
}
app.use(express.static(`${__dirname}/public`));

// CREATING MIDDLEWARE

app.use((req, res, next) => {
  console.log('Hello from MW 🥇');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
