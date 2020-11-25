const mongoose = require("mongoose");
// Create a person prototype
const { Schema } = mongoose;
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});
const person = mongoose.model("Person", personSchema);
module.exports = person;
