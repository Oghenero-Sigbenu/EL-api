// allows our project read variables from .env files
require("dotenv").config(); 
const express = require("express");

// Enables Cross Origin Resource Sharing for our Project
const cors = require("cors");

const userRoutes = require("./route/user");

const app = express();
app.use(express.json());
app.use(express.urlencoded()); 
app.use(cors());


app.use("/api/v1/user", userRoutes);
app.use('*', (req, res, next) => {
    res.json({ message: 'Invalid url'});
});

// develoment error handler
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV == "production") {
        return next(err)
    }
    return res.json({ message: err.message || "an error occured", error: err });
});

// Production error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.json({ message: "Something wrong" });
});

process.on('unhandledRejection', (reason) => {
    throw reason;
});

process.on('uncaughtException', (error) => {
    logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
    process.kill(process.pid, 'SIGTERM');
});

module.exports =  app;
