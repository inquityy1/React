const mongoose = require("mongoose");
const Student = require("../src/student");
const Comment = require("../src/comment");
const ArticleBlog = require("../src/articleBlog");

describe("Association Test", () => {
  let jason, articleBlog, comment;

  beforeEach((done) => {
    jason = new Student({ name: "Jason" });
    articleBlog = new ArticleBlog({
      title: "MongoDb",
      content: "Mongoose and Mocha",
    });
    comment = new Comment({ content: "Well done!" });

    jason.articleBlog.push(articleBlog);
    articleBlog.comments.push(comment);
    comment.students = jason;
  });
});
