export const formatDate = (dateString: string) => {
  const options = {
    year: 'numeric' as 'numeric',
    month: 'long' as 'long',
    day: 'numeric' as 'numeric',
  }
  const date = new Date(dateString)
  return `Posted On ${date.toLocaleDateString('en-US', options)}`
}
