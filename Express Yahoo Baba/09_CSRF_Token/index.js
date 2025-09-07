import cookieParser from "cookie-parser";
import express from "express";
import csrf from "csurf";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(cookieParser());
const csrfProtection = csrf({ cookie: true });

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/myform", csrfProtection, (req, res) => {
  res.render("myform", { csrfToken: req.csrfToken() });
});
app.post("/submit", csrfProtection, (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server is running at 3000 port");
});
