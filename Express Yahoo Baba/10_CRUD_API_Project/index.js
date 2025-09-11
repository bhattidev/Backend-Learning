import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import connectDB from "./config/database.js";
import studentRoutes from "./routes/students.routes.js";
import { MulterError } from "multer";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

// parse application/x-www-form-urlcoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//router
app.use("/api/students", studentRoutes);

app.use((error, req, res, next) => {
  if (error instanceof MulterError) {
    return res
      .status(400)
      .send(`Image Error: ${error.message} : ${error.code}`);
  } else if (error) {
    return res.status(500).send(`Something went wrong: ${error.message}`);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
