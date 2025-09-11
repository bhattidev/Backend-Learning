import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Student from "../models/students.model.js";

const router = express.Router();

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
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

//Get All Students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get a Single Student
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    } else {
      return res.json(student);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Add a New Studen
router.post("/", upload.single("profile_pic"), async (req, res) => {
  try {
    const student = new Student(req.body);
    if (req.file) {
      student.profile_pic = req.file.filename;
    }
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update a Student
router.put("/:id", upload.single("profile_pic"), async (req, res) => {
  try {
    const existingStudent = await Student.findById(req.params.id);
    if (!existingStudent) {
      if (req.file.filename) {
        const filepath = path.join("./uploads", existingStudent.profile_pic);
        fs.unlink(filepath, (err) => {
          if (err) console.log("Failed to Delete Image: ", err);
        });
      }
      return res.status(404).json({ message: "Student not found" });
    }

    if (req.file) {
      if (existingStudent.profile_pic) {
        const oldImagePath = path.join(
          "./uploads",
          existingStudent.profile_pic
        );
        fs.unlink(oldImagePath, (err) => {
          if (err) console.log("Failed to Delete: ", err);
        });
      }
      req.body.profile_pic = req.file.fieldname;
    }
    const updateStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updateStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete a student
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    if (student.profile_pic) {
      const filePath = path.join("./uploads", student.profile_pic);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("Failed to Delete: ", err);
        }
      });
    }
    res.json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
