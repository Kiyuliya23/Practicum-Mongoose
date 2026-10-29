import mongoose from "mongoose";

// Создали схему курса
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }]
});

// Создали модель
const Course = mongoose.model("Course", courseSchema);

export default Course;