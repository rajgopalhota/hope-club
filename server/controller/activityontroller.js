const express = require("express");
const router = express.Router();
const Activity = require("./../models/activitySchema");
const User = require("./../models/user");
const authMiddleware = require("./../middleware/authMiddleware");

// Create Activity
router.post("/activities", authMiddleware, async (req, res) => {
  try {
    console.log("object");
    const user = req.user;

    // Check if the user's role is Admin or Manager
    if (user.role !== "Admin" && user.role !== "Manager") {
      return res.status(403).json({ message: "Permission denied" });
    }

    // Add user name to the activity data
    const activityData = {
      ...req.body,
      createdBy: user.name,
    };

    const activity = new Activity(activityData);
    await activity.save();
    res.status(201).json({ message: "Activity saved" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register User for an Activity
router.post(
  "/activities/register/:activityId",
  authMiddleware,
  async (req, res) => {
    try {
      const user = req.user; // Assuming user information is attached to the request
      const activityId = req.params.activityId;

      // Add the activity to the user's registeredActivities
      user.registeredActivities.push(activityId);

      await user.save();
      res
        .status(200)
        .json({ message: "User registered for the activity successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.post(
  "/activities/unregister/:activityId",
  authMiddleware,
  async (req, res) => {
    try {
      const user = req.user; // Assuming user information is attached to the request
      const activityId = req.params.activityId;

      // Remove the activity from the user's registeredActivities
      user.registeredActivities = user.registeredActivities.filter(
        (activity) => activity.toString() !== activityId
      );

      await user.save();
      res
        .status(200)
        .json({ message: "User unregistered from the activity successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Get All Activities (including both user's registered and other activities)
router.get("/activities", authMiddleware, async (req, res) => {
  try {
    const user = req.user; // Assuming user information is attached to the request

    // Fetch user activities and populate details from the 'registeredActivities' field
    const userActivities = await User.findById(user._id).populate(
      "registeredActivities"
    );

    // If the user is registered in any activity, exclude those activities from all activities
    const allActivities = await Activity.find({
      _id: {
        $nin: userActivities.registeredActivities.map(
          (activity) => activity._id
        ),
      },
    });

    // If the user is not registered in any activity, fetch all activities
    if (userActivities.registeredActivities.length === 0) {
      return res.json({
        userActivities: [],
        otherActivities: allActivities,
      });
    }

    // If the user is registered in some activities, return user's activities and other activities
    res.json({
      userActivities: userActivities.registeredActivities,
      otherActivities: allActivities,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Get All Activities (including both user's registered and other activities)
router.get("/get-all", async (req, res) => {
  try {
    const allActivities = await Activity.find();
    return res.json({
      userActivities: [],
      otherActivities: allActivities,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add other routes for updating and deleting activities if needed

module.exports = router;
