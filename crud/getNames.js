const express = require('express');
const mongoose = require('../connectDB');
const app = express.Router();

const chNames = require("../models/childrenNames");
const spNames = require("../models/specialestNames");
app.get("/getchname", async (req, res) => {
    const result = await chNames.find({}, 'Fname Lname');
    res.json(result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].Fname + " " + result[i].Lname);
    }
});


app.get("/getspname", async (req, res) => {
    const result = await spNames.find({});
    res.json(result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].Fname + " " + result[i].Lname);
    }
}
);

module.exports = app;