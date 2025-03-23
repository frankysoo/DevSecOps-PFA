const express = require("express");
const router = express.Router();

// Home Route - displays general welcome and project summary
router.get("/", (req, res) => {
    res.render("index", { 
        title: "DevSecOps CI/CD Project", 
        description: "Welcome to our project website. Discover how we integrate CI/CD, cybersecurity, networking, and SIEM fundamentals to build a secure, efficient pipeline."
    });
});

module.exports = router;

