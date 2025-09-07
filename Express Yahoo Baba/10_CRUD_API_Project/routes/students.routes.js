import express from "express";
import Student from "../models/students.model.js";

const router = express.Router();

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
router.post("/", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update a Student
router.put("/:id", async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateStudent) {
      return res.status(404).json({ message: "Student not found" });
    } else {
      res.json(updateStudent);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get All Students
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    } else {
      res.json({ message: "Student Deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
