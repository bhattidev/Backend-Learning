import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
    },
    address: {  
        type: String,
        required: true
        }
});


const Contact = mongoose.model('Contact', contactSchema);
export default Contact;