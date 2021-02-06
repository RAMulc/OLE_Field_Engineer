const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { createJWT } = require("../utils/auth");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

module.exports = {
    signup: function (req, res, next) {
        let { name, email, password, password2 } = req.body;
        //console.log("req", req.body);
        let errors = [];

        if (!name) {
            errors.push({ name: "Please enter your name." });
        }

        if (!email) {
            errors.push({ email: "Please enter an email address." });
        }

        if (!emailRegexp.test(email)) {
            errors.push({ email: "A valid email address is required." });
        }

        if (!password) {
            errors.push({ password: "A password is required." });
        }

        if (!password2) {
            errors.push({
                password2: "Please re-enter your password.",
            });
        }

        if (password != password2) {
            errors.push({ password: "Your passwords do not match!" });
        }

        if (errors.length > 0) {
            console.log("errors", errors)
            return res.status(422).json({ errors: errors });
        }

        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    return res.status(422).json({ errors: [{ user: "A user with this email already exists!" }] });
                } else {
                    const user = new User({
                        name: name,
                        email: email,
                        password: password,
                    });
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(password, salt, function (err, hash) {
                            if (err) throw err;
                            user.password = hash;
                            user.save()
                                .then(response => {
                                    res.status(200).json({
                                        success: true,
                                        result: response
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        errors: [{ error: err }]
                                    });
                                });
                        });
                    });
                }
            }).catch(err => {
                res.status(500).json({
                    errors: [{ error: 'Something went wrong' }]
                });
            })
    },
    signin: function (req, res) {
        let { email, password } = req.body;
        let errors = [];

        if (!email) {
            errors.push({ email: "Please enter an email address" });
        }

        if (!emailRegexp.test(email)) {
            errors.push({ email: "A valid email address is required" });
        }

        if (!password) {
            errors.push({ password: "A password is required" });
        }

        if (errors.length > 0) {
            return res.status(422).json({ errors: errors });
        }

        User.findOne({ email: email }).then(user => {
            if (!user) {
                return res.status(404).json({
                    errors: [{ user: `Account with user email: ${email} does not exist.` }],
                });
            } else {
                bcrypt.compare(password, user.password).then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({
                            errors: [{ password: "You have entered an incorrect password" }]
                        });
                    }
                    let access_token = createJWT(
                        user.email,
                        user._id,
                        360000000
                    );

                    jwt.verify(access_token, process.env.TOKEN_SECRET, (err,
                        decoded) => {
                        if (err) {
                            res.status(500).json({ errors: err });
                        }
                        if (decoded) {
                            return res.status(200).json({
                                success: true,
                                token: access_token,
                                message: user
                            });
                        }
                    });
                }).catch(err => {
                    res.status(500).json({ errors: err });
                });
            }
        }).catch(err => {
            res.status(500).json({ errors: err });
        });
    },
    tokenIsValid: function (req, res) {
        try {
            const token = req.body.headers["x-auth-token"];
            if (!token) return res.json({ success: false });

            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            if (!verified) return res.json({ success: false });

            User.findById(verified.userId)
                .then(user => {
                    if (!user) return res.json({ success: false });
                    return res.json({
                        success: true,
                        userId: verified.userId
                    });
                })

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    findById: function (req, res) {
        User.findById(req.params.id)
            .then(user => {
                //console.log("user", user);
                res.json({ user });
            })
    },
    findAll: function (req, res) {
        User.find(req.query)
            .then(users => {
                console.log("users", users);
                res.json({ users });
            })
    },
};