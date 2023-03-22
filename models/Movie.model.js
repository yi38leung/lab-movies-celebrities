const { Schema, model } = require("mongoose");

//  Add your code here

//Iteration #5: The Movie model
const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [
      {
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
      },
    ],
  }
);

module.exports = model("Movie", movieSchema);
