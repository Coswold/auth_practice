const User = require("../models/user");
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    // SIGN UP FORM
    app.get("/", (req, res) => {
        res.render("sign-up");
    });

    app.post("/sign-up", (req, res) => {
        console.log(req.body)
        const newUser = new User(req.body);
        newUser.save(function (err) {
            if (err) console.log(err);
            const token = jwt.sign({ _id: newUser._id }, 'shhhhhhared-secret');
            console.log(token)
            // saved!
            Cookies.set('token', data.token);
            
            window.location.href = "/";
        });
    })
}
