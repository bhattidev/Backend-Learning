import { error } from "console";
import express from "express";
import multer from "multer";
import path from "path";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
  // fileFilter,
});

app.post(
  "/submitform",
  upload.array("userfile", 3),
  (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send(`No file uploaded: ${error.message}`);
    }

    res.send(req.files);
  },
  (error, res, next) => {
    if (error instanceof multer.MulterError) {
      if (error.code === "LIMIT_UNEXPECTED_FILE") {
        return res.status(400).send(`Too many files uploaded!`);
      }
      return res
        .status(400)
        .send(`Multer error: ${error.message} : ${error.code}`);
    } else if (error) {
      return res.status(500).send(`Something were wrong: ${error.message}`);
    }
    next();
  }
);

app.get("/", (req, res) => {
  res.render("myform");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
