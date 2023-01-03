const asyncHandler = require("express-async-handler");
// import goals database schema
const goalInfoSchema = require("../models/goalModel");

//@desc Get goals
//@route Get request /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    // variable that keeps data from the database gotten through the mongoose model/schema
    const goals = await goalInfoSchema.find();
    // res.json({ message: "get goals alright router works " });
    res.status(200).json(goals);
});

//@desc set goals
//@route set request /api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        // user input error
        res.status(400);
        // the message is the one used in the error handler in middleware
        throw new Error("add text field please");
    }
    const goal = await goalInfoSchema.create({
        text: req.body.text,
    });
    // res.status(200).json({ message: "post goals alright router works " });
    res.status(200).json(goal);
});

//@desc update goals
//@route update request /api/goals
//@access private
const putGoals = asyncHandler(async (req, res) => {
    // res.json({ message: `Goals created alright ${req.params.id}` });
    const goal = await goalInfoSchema.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("goal not found");
    }
    const updatedGoal = await goalInfoSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedGoal);
});

//@desc delete goals
//@route delete request /api/goals
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
    // res.json({ message: `Goals deleted alright ${req.params.id}` });
    const goal = await goalInfoSchema.findById(req.params.id);
    if (!goal) {
        throw new Error("goal does not exist");
    }
    await goal.remove();
    res.status(200).json({ id: req.params.id, Message: "Goal deleted" });
});

module.exports = {
    getGoals,
    putGoals,
    deleteGoals,
    setGoals,
};
