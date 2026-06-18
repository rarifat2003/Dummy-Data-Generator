const express = require('express');
const router = express.Router();
const Employee = require('../models/company'); // Import your model schema [cite: 877]
const mongoose = require('mongoose')


// Handles the DELETE functionality
router.get('/', async (req, res) => {
    try {
        // Mongoose command to clear the entire collection 
        await Employee.deleteMany({});
        res.send("All dummy data successfully cleared!");
    } catch (err) {
        console.error("Error wiping database:", err);
        res.status(500).send("Failed to clear database.");
    }
});

module.exports = router;
