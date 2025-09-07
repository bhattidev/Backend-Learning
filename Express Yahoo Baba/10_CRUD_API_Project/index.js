import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import studentRoutes from "./routes/students.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router
app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
