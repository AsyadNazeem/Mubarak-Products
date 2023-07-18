const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
