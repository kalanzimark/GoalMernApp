const asyncHandler = require("express-async-handler");

//@desc Get goals
//@route Get request /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    res.json({ message: "get goals alright router works " });
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
    res.status(200).json({ message: "post goals alright router works " });
});

//@desc update goals
//@route update request /api/goals
//@access private
const putGoals = asyncHandler(async (req, res) => {
    res.json({ message: `Goals created alright ${req.params.id}` });
});

//@desc delete goals
//@route delete request /api/goals
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
    res.json({ message: `Goals deleted alright ${req.params.id}` });
});

module.exports = {
    getGoals,
    putGoals,
    deleteGoals,
    setGoals,
};
