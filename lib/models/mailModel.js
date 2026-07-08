import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  date : {type: Date , default: Date.now()}

 
});

const mailModel =
  mongoose.models.email || mongoose.model("email", EmailSchema);

export default mailModel;