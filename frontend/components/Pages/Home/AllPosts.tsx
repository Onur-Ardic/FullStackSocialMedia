const gettAllPosts = async () => {
  const response = await fetch('http://localhost:5000/api/posts')
  const posts = await response.json()
  return posts
}
const AllPosts = async () => {
  const posts = await gettAllPosts()
  console.log(posts)

  return <div>AllPosts</div>
}

export default AllPosts
