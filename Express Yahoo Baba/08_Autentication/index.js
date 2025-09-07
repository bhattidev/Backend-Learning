import express from "express";
import session from "express-session";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "./model/user.model.js";
const app = express();

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/user-crud").then(() => {
  console.log("Database connected");
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false,
  })
);
let checkLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.render("login", { error: null });
  }
};
// Set EJS as template engine
app.set("view engine", "ejs");

app.get("/", checkLogin, (req, res) => {
  res.send(
    `
    <h1>Home Page</h1>
     <p>Hello, ${req.session.user}</p>
     <a href='/profile'>Profile Page</a><br>
     <a href='/logout'>Logout</a>
     `
  );
});
app.get("/profile", checkLogin, (req, res) => {
  res.send(
    `<h1>Profile Page</h1> 
    <p>Hello, ${req.session.user}</p> 
     <a href='/'>Home Home</a><br>
    <a href='/logout'>Logout</a>`
  );
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/");
  } else {
    res.render("login", { error: null });
  }
});

app.post("/login", async (req, res) => {
  const { useremail, userpassword } = req.body;
  const user = await User.findOne({ useremail });

  if (!user) return res.render("login", { error: "User not found" });

  const isMatch = await bcrypt.compare(userpassword, user.userpassword);
  if (!isMatch) return res.render("login", { error: "Invalid Password" });
  req.session.user = useremail;
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.get("/register", (req, res) => {
  res.render("register", { error: null });
});
app.post("/register", async (req, res) => {
  const { username, useremail, userpassword } = req.body;
  const hashedPassword = await bcrypt.hash(userpassword, 10);
  await User.create({ username, useremail, userpassword: hashedPassword });
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
