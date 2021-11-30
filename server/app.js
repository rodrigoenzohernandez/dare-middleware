var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../src/routes/index');
var policiesRouter = require('../src/routes/policies')
var clientsRouter = require('../src/routes/clients')
var authRouter = require('../src/routes/auth')

const session = require('express-session');

var app = express();

app.use(session( 
  {    
    saveUninitialized: true,
    resave: true,
    secret: "dare-secret"
  }
  ));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/policies', policiesRouter);
app.use('/clients', clientsRouter);
app.use('/login', authRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
