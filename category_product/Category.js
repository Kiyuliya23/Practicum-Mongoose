import mongoose from "mongoose";

// Создали схему категории
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Создали модель
const Category = mongoose.model("Category", categorySchema);

export default Category;