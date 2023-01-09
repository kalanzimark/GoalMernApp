const express = require("express");
// route function to connect controller to routes
const router = express.Router();
const {
    registerUser,
    loginUser,
    getMe,
} = require("../controllers/userController");

//call in protect route function
const { protect } = require("../middleware/authMiddleware");

// connect router to controllers
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
