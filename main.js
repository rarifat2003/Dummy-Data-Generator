const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Imports
const generateRoute = require("./routes/generate");
const deleteRoute = require("./routes/delete"); 

// Mounting rules
app.use("/generate", generateRoute);
app.use("/delete", deleteRoute); 

mongoose.connect("mongodb://localhost:27017/Company")
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.error(err));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index", { foo: 'FOO' }); 
});

app.listen(port, () => console.log(`Server listening on port ${port}`));