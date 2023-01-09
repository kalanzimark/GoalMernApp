const mongoose = require("mongoose");

// create database connection
const connectDB = async () => {
    try {
        // mongoose.set("strictQuery", true);
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
