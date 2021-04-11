require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;

const openRouter = require('./routes/open');
const closedRouter = require('./routes/closed.js');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/open', openRouter);
app.use('/closed', closedRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});