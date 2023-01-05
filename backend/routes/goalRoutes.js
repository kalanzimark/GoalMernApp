const express = require("express");
// route function to connect controller to routes
const router = express.Router();
// get ccontrollers
const {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
} = require("../controllers/goalController");
//call in protect route function
const { protect } = require("../Middleware/authenticationMiddleware");
// connect router to controllers
router.get("/", protect, getGoals);
router.post("/", protect, setGoals);
router.put("/:id", protect, updateGoals);
router.delete("/:id", protect, deleteGoals);

module.exports = router;
