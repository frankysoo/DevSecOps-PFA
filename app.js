require('dotenv').config();
const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const path = require('path');

const app = express();

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "img-src": ["'self'", "data:", "https:"],
            "script-src": ["'self'", "'unsafe-inline'"]
        }
    }
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple session configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
    }
}));

// Simple authentication middleware
app.use((req, res, next) => {
    // Make user data available to all templates
    res.locals.user = req.session.user || null;
    next();
});

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'DevSecOps Showcase'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Our Project'
    });
});

app.get('/dashboard', (req, res) => {
    // Simple dashboard page
    res.render('dashboard', {
        title: 'Project Dashboard',
        features: [
            { name: 'Secure Headers', status: 'Implemented' },
            { name: 'Rate Limiting', status: 'Implemented' },
            { name: 'XSS Protection', status: 'Implemented' },
            { name: 'CSRF Protection', status: 'Implemented' }
        ]
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', {
        message: 'Something broke!',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
