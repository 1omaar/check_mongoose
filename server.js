const express = require("express");
const app = express();
const connectDB = require("./config/ConnectDB");
let person = require("./models/Person_Prototype");
require("dotenv").config({ path: "MONGO_URL.env" });
app.use(express.json())
//  connect to database
connectDB();

//create and save a record of a model
let user = new person({
  name: "ala",
  age: 25,
  favoriteFoods: ["tomate", "pizza"],
});
user
  .save()
  .then((doc) => doc)
  .catch((err) => err);

// Create Many Records
let users = person.create([
  {
    name: "hedi",
    age: 13,
    favoriteFoods: ["hamburger", "donuts"],
  },

  {
    name: "senda",
    age: 24,
    favoriteFoods: ["salade", "spagetti"],
  },
]);

//Find all person
person
  .find()
  .then((doc) => doc)
  .catch((err) => err);

// Find one person
person
  .findOne({ favoriteFoods: ["pizza"] })
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));

//  Find one person by id
let findPersonById = function(req, res){
person
  .findById(req.params.id)
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));
}
findPersonById();
// connect app to the port
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
