const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
        // associating user to goal
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            // add a reference modal the object id associates with
            ref: "User",
        },
        text: {
            type: String,
            required: [true, "please add text value"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
