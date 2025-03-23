require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");

// Import Routes
const indexRoutes = require("./routes/index");
const aboutRoutes = require("./routes/about");

// Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRoutes);
app.use("/about", aboutRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

