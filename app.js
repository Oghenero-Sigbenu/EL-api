// allows our project read variables from .env files
require("dotenv").config(); 
const express = require("express");

// Enables Cross Origin Resource Sharing for our Project
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded()); 
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World")
}); 

module.exports =  app;
