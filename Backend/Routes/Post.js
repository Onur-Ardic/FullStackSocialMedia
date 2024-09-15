const express = require('express')
const postService = require('../Services/postService')
const multer = require('multer')

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.mimetype.startsWith('video')
      ? '../frontend/public/videos'
      : '../frontend/public/images'
    cb(null, folder)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm']
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Geçersiz dosya türü. Sadece resim ve video yükleyebilirsiniz.'), false)
  }
}

const upload = multer({ storage, fileFilter })

router.post('/', upload.single('post_media'), async (req, res) => {
  try {
    const { post_title, post_content, UserId, post_date } = req.body
    const post_media = req.file ? req.file.filename : null

    const result = await postService.createBlogPost(
      UserId,
      post_title,
      post_content,
      post_media,
      new Date(post_date),
    )
    res.status(201).json({ message: 'Blog yazısı başarıyla eklendi', post: result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const filters = {}
    const { UserId, post_title, post_content, post_media, post_date } = req.query

    if (UserId) filters.UserId = UserId
    if (post_title) filters.post_title = post_title
    if (post_content) filters.post_content = post_content
    if (post_media) filters.post_media = post_media
    if (post_date) filters.post_date = post_date

    const AllPosts = await postService.getAllPosts(filters)
    res.json(AllPosts)
  } catch (error) {
    console.error('Error in GET /posts:', error)
    res.status(500).json({ error: 'Sunucu hatası' })
  }
})

router.get('/:postId', async (req, res) => {
  try {
    const postId = parseInt(req.params.postId)
    const post = await postService.getPostById(postId)
    if (!post) {
      return res.status(404).json({ error: 'Böyle bir yazı bulunamadı' })
    }
    res.json(post)
  } catch (error) {
    console.error('Error in GET /posts/pages/postdetail/:postId:', error)
    res.status(500).json({ error: 'Sunucu hatası' })
  }
})

module.exports = router
