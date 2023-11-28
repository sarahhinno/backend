
const mongoose = require('mongoose');

const vacationSchema = new mongoose.Schema({
    idd: String,
    dateOfVavation: Date,
    reason: String,
});

const vacationsEmp = mongoose.model('vacationsEmp', vacationSchema);

module.exports = vacationsEmp;