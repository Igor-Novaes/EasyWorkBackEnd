const mongoose = require("../config/db");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  type: {
     type: String,
     required: true },
});

module.exports = {
  CategoryModel: mongoose.model("Category", CategorySchema),
  CategorySchema
  };
