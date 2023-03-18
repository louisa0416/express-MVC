const handleSuccess = require("../service/handleSuccess");
const handleError = require("../service/handleError");
const Posts = require("../model/post");
const User = require("../model/user");
const posts = {
  async getPosts(req, res) {
    //const allPosts = await Posts.find();
    const timeSort = req.query.timeSort == "asc" ? "createdAt" : "-createdAt";
    const q =
      req.query.q !== undefined ? { content: new RegExp(req.query.q) } : {};
    const allPosts = await Posts.find(q)
      .populate({
        path: "user",
        select: "name photo",
      })
      .sort(timeSort);
    handleSuccess(res, allPosts);
  },
  async createdPosts(req, res) {
    try {
      //const body = req.body;
      const { body } = req;
      if (body.content) {
        const newPost = await Posts.create({
          user: body.user,
          content: body.content,
          tags: body.tags,
          type: body.type,
        });
        handleSuccess(res, newPost);
      } else {
        handleError(res);
      }
    } catch (err) {
      console.log("catch" + err);

      handleError(res, err);
    }
  },
};

module.exports = posts;
