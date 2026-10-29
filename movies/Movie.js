import mongoose from "mongoose";

// Создали схему фильма
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  releaseYear: {
    type: Number,
    required: true
  },

  actors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Actor"
  }]
});

// Создали модель
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;