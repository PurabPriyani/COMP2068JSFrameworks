// --------------------------------------------
// Load Environment Variables
// --------------------------------------------
require('dotenv').config();

// --------------------------------------------
// Core Modules
// --------------------------------------------
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// --------------------------------------------
// Database + Authentication
// --------------------------------------------
const dbConnect = require('./config/db');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

// Connect to MongoDB
dbConnect();

// Load Passport Strategies
require('./config/passport')(passport);

// --------------------------------------------
// Initialize Express App
// --------------------------------------------
var app = express();

// --------------------------------------------
// View Engine Setup (Standard Express Generator)
// --------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// --------------------------------------------
// Static Public Folder
// --------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --------------------------------------------
// Standard Middleware
// --------------------------------------------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// --------------------------------------------
// Sessions + Passport + Flash
// --------------------------------------------
app.use(
  session({
    secret: process.env.SESSION_SECRET || "lostfoundsecret123",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Make user & flash messages available to all views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.year = new Date().getFullYear();
  next();
});

// --------------------------------------------
// ROUTES
// --------------------------------------------
app.use('/', require('./routes/index'));       // Home + public listing + search
app.use('/auth', require('./routes/auth'));    // Login, Register, GitHub auth
app.use('/items', require('./routes/items'));  // CRUD operations

// --------------------------------------------
// 404 Handler
// --------------------------------------------
app.use(function (req, res, next) {
  next(createError(404));
});

// --------------------------------------------
// General Error Handler
// --------------------------------------------
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error =
    req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// --------------------------------------------
// Export App
// --------------------------------------------
module.exports = app;
