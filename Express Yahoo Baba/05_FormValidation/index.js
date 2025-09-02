import { error } from "console";
import express from "express";
import { body, validationResult } from "express-validator";
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var validationRegistration = [
  body("username")
    .notEmpty()
    .withMessage("Username is required.")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 character.")
    .trim()
    .isAlpha()
    .withMessage("User must contain only letters")
    .custom((value) => {
      if (value === "admin") {
        throw new Error("Username admin is not allowed.");
      }
      return true;
    })
    .toLowerCase(),
  ,
  body("useremail")
    .isEmail()
    .withMessage("Please provide a valide Email Id.")
    .normalizeEmail(),
  body("userpass")
    .isLength({ min: 5, max: 10 })
    .withMessage(
      "Password must be at least 3 characters and maximum 10 characters."
    )
    .isStrongPassword()
    .withMessage("Password must be strong"),
  body("userage")
    .isNumeric()
    .withMessage("Age must be numeric.")
    .isInt()
    .withMessage("Age must be at least 18 years old."),
  body("usercity")
    .isIn(["Lodhran", "Karachi", "Lahore", "Islamabad"])
    .withMessage("City must be in the list"),
];

app.get("/myform", (req, res) => {
  res.render("myform", { errors: 0 });
});

app.post("/saveform", validationRegistration, (req, res) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    res.send(req.body);
  }
  res.render("myform", { errors: error.array() });
});

app.listen(3000, () => {
  console.log("Express Server starts on port 3000");
});
