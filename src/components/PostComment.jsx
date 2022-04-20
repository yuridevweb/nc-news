import { useState } from 'react'
import { postNewComment } from '../utils/api'

const PostComment = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState([])
  const handleSumbit = (e) => {
    e.preventDefault()
    postNewComment(article_id, newComment).then((postedComment) => {
      setComments((currComments) => {
        const newComments = [postedComment, ...currComments]
        return newComments
      })
      setNewComment('')
    })
  }
  return (
    <form onSubmit={handleSumbit}>
      <label for='comment-form'>Add a comment... </label>
      <input
        className='post-comment-form'
        id='cheese'
        type='text'
        minlength='3'
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        required={true}
      ></input>
      <button>Post</button>
    </form>
  )
}

export default PostComment
