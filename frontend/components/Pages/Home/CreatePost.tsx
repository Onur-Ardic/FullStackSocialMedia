import { Button, CircularProgress, styled, TextField } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import SendIcon from '@mui/icons-material/Send'
import React, { useEffect, useState } from 'react'
import { useUser } from '@/hooks/useUser'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

interface CreatePostProps {
  onNewPost: (newPost: any) => void
}

export const CreatePost: React.FC<CreatePostProps> = ({ onNewPost }) => {
  const user = useUser()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    UserId: user.user?.id || '',
    post_title: '',
    post_content: '',
    post_date: new Date(),
    post_media: null,
  })

  useEffect(() => {
    if (user.status === 'succeeded' && user.user?.id && !formData.UserId) {
      setFormData((prevData) => ({
        ...prevData,
        UserId: user.user?.id || '',
      }))
    }
  }, [user.status, user.user?.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, post_media: e.target.files[0] })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.UserId) {
      alert('Kullanıcı kimliği bulunamadı. Lütfen giriş yapın.')
      return
    }

    setLoading(true)

    const form = new FormData()
    form.append('UserId', String(formData.UserId))
    form.append('post_title', formData.post_title)
    form.append('post_content', formData.post_content)
    form.append('post_date', formData.post_date.toISOString())
    if (formData.post_media) {
      form.append('post_media', formData.post_media)
    }

    try {
      const post = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: form,
      })

      if (!post.ok) {
        const errorData = await post.json()
        throw new Error(errorData.error)
      }

      const newPost = await post.json()
      onNewPost(newPost.post)
      alert('Post created successfully')
    } catch (error) {
      alert('Post oluşturulurken hata oluştu: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {user.status === 'succeeded' ? (
        <div className="create-post-area border p-10 mt-11">
          <form className="form" onSubmit={handleFormSubmit} encType="multipart/form-data">
            <h1>Create a New Post</h1>
            <div className="create-area-post-title flex flex-col">
              <TextField
                id="standard-basic"
                label="Post Title"
                variant="standard"
                onChange={handleChange}
                className="mt-3"
                name="post_title"
              />

              <textarea
                onChange={(e) => setFormData({ ...formData, post_content: e.target.value })}
                name="post_content"
                id="post-content"
                placeholder="Write post content here..."
                className="border p-3 mt-3"
                rows={5}
              ></textarea>

              <div className="button mt-3">
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                  Upload image or video
                  <VisuallyHiddenInput
                    type="file"
                    name="post_media"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                  />
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="ml-3"
                  startIcon={<SendIcon />}
                  disabled={!formData.post_media || loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Post'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  )
}
