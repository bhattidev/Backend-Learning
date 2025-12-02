import express from "express";
const app = express();
const port = 3000;
import fs from "fs";

const data = fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("2. File contents:", data);
});

// Get Route
app.get("/", (req, res) => {
  res.send(data);
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
