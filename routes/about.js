const express = require("express");
const router = express.Router();

// About Route - detailed information about the project
router.get("/", (req, res) => {
    res.render("about", { 
        title: "About the Project", 
        projectInfo: "This project focuses on implementing a DevSecOps CI/CD pipeline for a simple web application. It integrates cybersecurity, networking, and SIEM fundamentals to ensure secure and efficient development practices. Roles are split between secure coding & research (Cybersecurity) and repository management & automation (DevOps)."
    });
});

module.exports = router;

