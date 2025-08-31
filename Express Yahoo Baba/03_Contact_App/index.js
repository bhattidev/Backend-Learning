const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contacts.models");
const contact = require("./models/contacts.models");
const app = express();
const port = 3000;

//Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/contacts-crud")
  .then(() => console.log("database connected"));

//Middleware
app.set("view engin", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.render("home.ejs", { contacts });
});

app.get("/show-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("show-contact.ejs", { contact });
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact.ejs");
});

app.post("/add-contact/", (req, res) => {});

app.get("/update-contact/:id", (req, res) => {
  res.render("update-contact.ejs");
});
app.post("/update-contact", (req, res) => {});

app.get("/delet-contact/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Server successfully running on http://localhost:${port}`);
});
