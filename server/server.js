const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/hope-club", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Sample controller (inside controllers folder)
const userController = require("./controller/userController");
const messagesRoute = require("./controller/messageController");
const activityRoutes = require("./controller/activityController");
const payRoutes = require("./controller/paymentController");
app.use("/api/users", userController); // Use this controller for handling user-related routes
app.use("/api/messages", messagesRoute);
app.use("/hope", activityRoutes);
app.use("/pay", payRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
