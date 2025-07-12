// userRoutes.js
const express = require("express");
const router = express.Router();

// ✅ Router-level middleware
router.use((req, res, next) => {
  console.log("Router-level middleware for /users route");
  next();
});

// ✅ Routes
router.get("/", (req, res) => {
  res.send("User Home");
});

router.get("/profile", (req, res) => {
  res.send("User Profile");
});

module.exports = router;
