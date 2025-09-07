import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  useremail: {
    type: String,
    require: true,
    unique: true,
  },
  userpassword: {
    type: String,
    require: true,
  },
});

export default mongoose.model("User", userSchema);
