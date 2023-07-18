const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Employee = require("./models/employee");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://asyadnazeem:Mustang123@mubarak.yatq3dc.mongodb.net/employee"
);
app.post("/signup", (req, res) => {
    Employee.create(req.body)
        .then((employees) => res.json(employees))
        .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    Employee.findOne({email: email}).then((employee) => {
        if (employee) {
            if (employee.password === password) {
                res.json({message: "Login Success"});
            } else {
                res.json({message: "Incorrect Password"});
            }
        } else {
            res.json({message: "Employee not found"});
        }
    });
});


app.listen(877, () => {
    console.log("Server is running on port 877");
});