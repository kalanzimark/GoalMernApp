const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUser,
} = require("../controllers/userController");

// import protect function
const { protect } = require("../Middleware/authenticationMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);

module.exports = router;
