import mongoose from "mongoose";

// Создали схему актёра
const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  birthdate: {
    type: Date,
    required: true
  },

  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie"
  }]
});

// Создали модель
const Actor = mongoose.model("Actor", actorSchema);

export default Actor;