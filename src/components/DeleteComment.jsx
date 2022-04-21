import { deleteCommentById } from '../utils/api'
import { useState } from 'react'

const DeleteComment = ({ comment_id, setComments }) => {
  const [err, setErr] = useState(null)
  const deleteComment = (e) => {
    setErr(null)
    setComments((currComments) => {
      return currComments.filter((comment) => comment_id !== comment.comment_id)
    })
    deleteCommentById(comment_id).catch((err) => {
      setErr('Sorry, something went wrong!')
    })
  }
  if (err) return <p>{err}</p>
  return <button onClick={deleteComment}>Delete</button>
}
export default DeleteComment
