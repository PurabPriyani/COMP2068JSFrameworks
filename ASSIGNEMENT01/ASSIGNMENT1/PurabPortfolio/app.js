// app.js - main Express server
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hbs = require('hbs');


// Import the single router required by the assignment (from controllers folder)
const indexRouter = require('./controllers/index');


const app = express();


// --- View engine setup (HBS) ---
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Register small helpers used in templates
hbs.registerHelper('ifEquals', function(a, b, options) {
return a === b ? options.fn(this) : options.inverse(this);
});


hbs.registerHelper('currentYear', () => new Date().getFullYear());


// App locals (available in all views) — customise your name/title here
app.locals.siteTitle = 'Purab Priyani';


// --- Middleware ---
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));


// --- Routes (single router) ---
app.use('/', indexRouter);


// --- 404 handler ---
app.use((req, res) => {
res.status(404).render('404', { title: 'Page not found' });
});


// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
});