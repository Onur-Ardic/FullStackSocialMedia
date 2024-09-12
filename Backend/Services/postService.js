const posts = require('../Models/Posts')

const createBlogPost = async (UserId, post_title, post_content, post_image, post_date) => {
  const newPost = await posts.create({
    UserId,
    post_title,
    post_content,
    post_image,
    post_date,
  })
  return newPost
}

const getAllPosts = async (filters) => {
  const AllPosts = await posts.findAll({
    where: filters,
  })
  return AllPosts
}

module.exports = {
  createBlogPost,
  getAllPosts,
}
