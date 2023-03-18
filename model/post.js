const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Context 未填寫"],
  },
  image: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now, //()要移掉
    select: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "貼文id未填寫"],
  },
  likes: {
    type: Number,
    default: 0,
  },
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
