const express = require('express');
const mongoose = require('../connectDB');
const app = express.Router();
const vacationsEmp = require("../models/vacations");
//const spNames = require("../models/specialestNames");


app.get("/vacation", (req, res) => {
    res.send('heloo')
});




app.post('/addNewVacations', async (req, res) => {
    console.log('enter the api');
    try {
        console.log('Request body:', req.body);

        //const vacationEmployee = JSON.parse(req.body.vacations);
        const newvacation = new vacationsEmp({

            idd: req.body.idd,
            dateOfVavation: req.body.dateOfVavation,
            reason: req.body.reason,

        });
        const savevacation = await newvacation.save();
        res.status(200).json(savevacation);
    } catch (error) {
        console.error('Error adding new vacation ', error);
    }
});


app.get("/getvacations", async (req, res) => {
    id = req.query.id;

    const result = await vacationsEmp.find({ idd: id });
    const count= await vacationsEmp.countDocuments({idd:id});
    //  const result = await Employee.find();

    res.json({
        result:result,
        count:count
    });
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
});


module.exports = app;