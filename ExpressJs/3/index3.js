// index.js
const express = require("express");
const app = express();
const userRoutes = require("./userRouter.js");

// ✅ Built-in Middleware to parse JSON
app.use(express.json());

// ✅ Custom Middleware - logs method, URL, and time
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

// ✅ Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

// ✅ POST Route
app.post("/data", (req, res) => {
  const data = req.body;
  res.send({ message: "Data received", data });
});



// Route parameters
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

// Search
app.get("/search", (req, res) => {
  const { keyword, page } = req.query;
  res.send(`Search keyword: ${keyword}, Page: ${page}`);
});


// ✅ Use Router-level middleware
app.use("/users", userRoutes);

// ✅ Error-handling Middleware
app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);
  res.status(500).send("Internal Server Error");
});

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});


app.listen(3000, () => console.log("Server running on http://localhost:3000"));
