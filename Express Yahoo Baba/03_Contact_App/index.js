import express from "express";
import { connectDB } from "./config/database.js";
import ContactRouter from "./routes/contacts.routes.js";
const app = express();
const port = process.env.PORT;

//database connectionc
connectDB();

//Middleware
app.set("view engin", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.use("/", ContactRouter);

app.listen(port, () => {
  console.log(`Server successfully running on http://localhost:${port}`);
});
