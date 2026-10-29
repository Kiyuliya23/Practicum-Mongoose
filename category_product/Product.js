import mongoose from "mongoose";

// Создали схему продукта
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
});

// Создали модель
const Product = mongoose.model("Product", productSchema);

export default Product;