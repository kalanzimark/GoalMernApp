const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
// @desc Register new user
// @route Post /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    // get user info from  request header
    const { name, email, password } = req.body;

    // check if user info exists
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("please add all user information");
    }
    // check if user exists in database
    // find user by unique email
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.json(400);
        throw new Error("user already exists");
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    // check if user was created
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("invalid user info");
    }
    res.json({ message: "wirks" });
});

// @desc Authenticate user
// @route Post /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // check for user email in database
    const user = await User.findOne({ email });

    // check if user exists and verify user password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("invalid user credentials");
    }
});

// @desc  Get user data
// @route Post /api/users/me
// @access Public
const getUser = asyncHandler(async (req, res) => {
    // because you have access to req.user through middleware in the token you can access access a specific user
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(200).json({ id: _id, name, email });
});

// generate jwt token to pass into login and register
// takes in user id as payload
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
module.exports = {
    registerUser,
    loginUser,
    getUser,
};
