const express = require('express');
const router = express.Router();
const Employee = require('../models/company')
const mongoose = require('mongoose')

router.get('/', async (req, res) => {
    const names = ["Harry", "John", "Emma", "Alex", "Sophia", "David", "Liam", "Olivia", "Noah", "Mia"];
    const cities = ["New York", "London", "Dhaka", "Berlin", "Tokyo"];
    const languages = ["Python", "JavaScript", "Java", "C++"];

    let data = [];

    for (let i = 0; i < 10; i++) {
        data.push({
            name: names[i],
            salary: Math.floor(30000 + Math.random() * 50000),
            language: languages[Math.floor(Math.random() * languages.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            isManager: Math.random() > 0.7
        });
    }
    console.log("User in Generating Dummy Data");
    try {
        await Employee.insertMany(data);
        res.send("Dummy data generated");
    } catch (err) {
        res.status(500).send("Failed");
    }
});

module.exports = router;