const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Trans-Connect API"
    });
});

// Server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Trans-Connect API running on http://localhost:${PORT}`);
});