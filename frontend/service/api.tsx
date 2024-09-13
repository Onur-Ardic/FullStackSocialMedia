export const gettAllPosts = async () => {
  const response = await fetch('http://localhost:5000/posts')
  const posts = await response.json()
  return posts
}
