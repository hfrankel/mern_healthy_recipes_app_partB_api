const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  dateOfComment: {
    type: Date,
    default: Date.now()
  },
  nickname: {
    type: String
    // required: true
  } //,
  // user_id: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'User',
  //     required: true
  // }
});

module.exports = CommentSchema;
