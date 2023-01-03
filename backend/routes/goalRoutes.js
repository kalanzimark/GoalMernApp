const express = require("express");
// route function to connect controller to routes
const router = express.Router();
// get ccontrollers
const {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals,
} = require("../controllers/goalController");

// connect router to controllers
router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", putGoals);
router.delete("/:id", deleteGoals);

module.exports = router;
