const express = require("express");
const app = express();

// Route parameter
app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Product ID is ${productId}`);
});

// Query parameter
app.get("/filter", (req, res) => {
  const { category, price } = req.query;
  res.send(`Category: ${category}, Price: ${price}`);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("404 - Route not found");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
