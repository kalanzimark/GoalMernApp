const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./Middleware/errorMiddleware");
const connectDB = require("./config/database");

const port = process.env.PORT || 5000;

// connect to database
connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect routers to main app
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// override default express error handler
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
