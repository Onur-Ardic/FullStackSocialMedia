const express = require('express')
const posts = require('../Models/Posts')
const postService = require('../Services/postService')
const multer = require('multer')

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
const upload = multer({ storage })

router.post('/', upload.single('post_image'), async (req, res) => {
  try {
    const { post_title, post_content, UserId, post_date } = req.body
    const post_image = req.file ? req.file.filename : null

    const result = await postService.createBlogPost(
      UserId,
      post_title,
      post_content,
      post_image,
      new Date(post_date),
    )
    res.status(201).json({ message: 'Blog yazısı başarıyla eklendi', post: result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
