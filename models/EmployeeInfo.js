const mongoose = require("mongoose");
const schema = mongoose.Schema;
const EmployeeInfoschema = new schema({
    firstName: String,
    secondName: String,
    thirdName: String,
    lastName: String,
    idd: String,
    startDate: Date,
    Phone: String,
    address: String,
    specialise: String,

});
const EmployeeInfo = mongoose.model("specialestinfos", EmployeeInfoschema);
module.exports = EmployeeInfo;