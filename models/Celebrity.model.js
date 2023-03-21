const { Schema, model } = require("mongoose");

//  Add your code here

//Iteration #2: The Celebrity model
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

module.exports = model("Celebrity", celebritySchema);
