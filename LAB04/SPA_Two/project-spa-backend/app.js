require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

// ROUTERS
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');

var app = express();

// ================================
// CONNECT TO MONGODB
// ================================
mongoose.connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));


// ================================
// VIEW ENGINE
// ================================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// ================================
// MIDDLEWARES
// ================================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


// ================================
// ROUTES
// ================================
app.use('/', indexRouter);
app.use('/projects', projectsRouter);   // ⭐ FINAL WORKING ROUTE


// ================================
// 404 HANDLER
// ================================
app.use((req, res, next) => next(createError(404)));


// ================================
// GLOBAL ERROR HANDLER
// ================================
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
