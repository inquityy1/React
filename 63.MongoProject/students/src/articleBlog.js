const mongoose = request("mongoose");
const Schema = mongoose.Schema;

const ArticleBlogSchema = new Schema({
  title: String,
  content: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const ArticleBlog = mongoose.model("articleBlog", ArticleBlogSchema);

module.exports = ArticleBlog;
