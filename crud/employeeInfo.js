const express = require('express');
const mongoose = require('../connectDB');
const app = express.Router();
const Employee = require("../models/EmployeeInfo");
//const spNames = require("../models/specialestNames");


app.get("/heloo", (req, res) => {
    res.send('heloo')
});


app.use(express.json());
app.get("/employee-info", async (req, res) => {
    id = req.query.id;

    const result = await Employee.findOne({ idd: id });

    //  const result = await Employee.find();
    res.json(result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
});



module.exports = app;