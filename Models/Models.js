import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

const Book = mongoose.model("Book", BookSchema);
const Author = mongoose.model("Author", AuthorSchema);

const models = {
  Book,
  Author,
};

export default models;
