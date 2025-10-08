const express = require('express');
const router = express.Router();

// Helper function to get current year
const getYear = () => new Date().getFullYear();

// Home page
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        siteTitle: 'My Portfolio',
        navActive: 'home',
        year: getYear()
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        siteTitle: 'My Portfolio',
        navActive: 'about',
        year: getYear()
    });
});

// Projects page
router.get('/projects', (req, res) => {
    const projects = [
        {
            title: "Shoe E-Commerce Frontend",
            description: "Developed the frontend for a shoe e-commerce website with sleek animations.",
            link: "https://github.com/PurabPriyani/FootFinese"
        },
        {
            title: "Student Feedback System",
            description: "Created a dynamic dashboard to manage student feedback efficiently.",
            link: "#"
        },
        {
            title: "Chocolate-Themed Website Design",
            description: "Designed a visually appealing frontend for a chocolate website.",
            link: "https://github.com/PurabPriyani/ChocolateDesign"
        }
    ];

    res.render('projects', {
        title: 'Projects',
        siteTitle: 'My Portfolio',
        navActive: 'projects',
        projects,
        year: getYear()
    });
});

// Contact page (GET)
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        siteTitle: 'My Portfolio',
        navActive: 'contact',
        form: {},
        year: getYear()
    });
});

// Contact page (POST)
router.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    let errors = [];

    if (!name) errors.push('Name is required');
    if (!email) errors.push('Email is required');
    if (!phone) errors.push('Phone is required');
    if (!message) errors.push('Message is required');

    if (errors.length > 0) {
        res.render('contact', {
            title: 'Contact',
            siteTitle: 'My Portfolio',
            navActive: 'contact',
            errors,
            form: { name, email, phone, message },
            year: getYear()
        });
    } else {
        res.send(`<script>
            alert('Your message has been sent successfully! Purab will contact you soon.');
            window.location.href='/contact';
        </script>`);
    }
});

module.exports = router;
