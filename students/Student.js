import mongoose from "mongoose";

// Создали схему студента
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
});

// Создали модель
const Student = mongoose.model("Student", studentSchema);

export default Student;