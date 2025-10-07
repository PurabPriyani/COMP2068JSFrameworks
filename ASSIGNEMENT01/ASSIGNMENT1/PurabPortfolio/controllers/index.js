// Import express so we can use the Router feature
const express = require('express');

// Create a new router object
const router = express.Router();

/*
  ===========================
  ROUTES FOR ALL SITE PAGES
  ===========================
*/

// Home Page Route
router.get('/', (req, res) => {
  // Renders the home.hbs file from the views folder
  res.render('home', { title: 'Home | Purab Priyani Portfolio' });
});

// About Page Route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me | Purab Priyani Portfolio' });
});

// Projects Page Route
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects | Purab Priyani Portfolio' });
});

// Contact Page Route
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me | Purab Priyani Portfolio' });
});

// Thank You Page (shown after form submission)
router.get('/thankyou', (req, res) => {
  res.render('thankyou', { title: 'Thank You | Purab Priyani Portfolio' });
});

// 404 (Page Not Found)
router.get('*', (req, res) => {
  res.status(404).render('404', { title: '404 | Page Not Found' });
});

// Export this router so app.js can use it
module.exports = router;
