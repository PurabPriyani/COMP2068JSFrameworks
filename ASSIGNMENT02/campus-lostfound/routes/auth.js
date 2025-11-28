const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Register page
router.get('/register', (req, res) => {
    res.render('auth/register');
});

// Register POST
router.post('/register', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);

    await User.create({
        email: req.body.email,
        password: hash
    });

    req.flash("success", "Registration successful! Please login.");
    res.redirect('/auth/login');
});

// Login page
router.get('/login', (req, res) => {
    res.render('auth/login');
});

// Login POST
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/items/my',
        failureRedirect: '/auth/login',
        failureFlash: true
    })
);

// Logout
router.get('/logout', (req, res) => {
    req.logout(() => {});
    req.flash("success", "Logged out successfully");
    res.redirect('/');
});

// GitHub login
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/login'
    }),
    (req, res) => res.redirect('/items/my')
);

module.exports = router;
