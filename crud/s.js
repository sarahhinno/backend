const login = require("../models/login");
const mongoose = require('../connectDB');
const express = require('express');
const bcrypt = require('bcrypt');
//const mongoose = require('../connectDB');
const app = express.Router();

//const bcrypt=require('bcrypt');

app.get("/hello", (req, res) => {
    res.send("hhhiiiiii");
})

module.exports = app;
app.post("/add", async (req, res) => {
    const newlog = login();
    const password = req.body.password;
    const saltRounds = 10;
    let hashpass = bcrypt.hashSync(password, saltRounds);
    newlog.email = req.body.email;
    newlog.cid = req.body.cid;
    newlog.password = hashpass;

    await newlog.save();
    res.json(newlog);

});