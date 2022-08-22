const mongoose = require("../config/db");
const Schema = mongoose.Schema;
const {CategorySchema} = require('./Category')


const NewsSchema = new Schema({
  category:
  {
    type: Schema.Types.ObjectId,
     ref: 'Category'
  },
  title:
  {
     type: String,
     required: true
  },
  text:
  {
    type: String,
    required: true 
  },
},
{
  timestamps:
  { 
    createdAt: 'posted', 
    updatedAt: 'updated'
  }
});

module.exports = mongoose.model("News", NewsSchema);
