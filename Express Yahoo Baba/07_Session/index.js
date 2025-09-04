import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
const app = express();

app.use(
  session({
    secret: "secretpassword",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/sessiondb",
      collectionName: "mysession",
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.get("/", (req, res) => {
  if (req.session.username) {
    res.send(`<h2>Username from session is : ${req.session.username}.</h2>`);
  } else {
    res.send(`<h2>No user name found in session</h2>`);
  }
});

app.get("/set-username", (req, res) => {
  req.session.username = "imran";
  res.send("<h1>Username has been set in session.</h1>");
});

app.get("/get-username", (req, res) => {
  if (req.session.username) {
    res.send(`<h2>Username from session is : ${req.session.username}.</h2>`);
  } else {
    res.send(`<h2>No user name found in session</h2>`);
  }
});

app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status.apply(500).send("Failed to destroy session");
    }
    res.send("<h1>Session Destroyed</h1>");
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
