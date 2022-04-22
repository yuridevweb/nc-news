import { deleteCommentById } from '../utils/api'
import { useState } from 'react'

const DeleteComment = ({ comment_id, setComments, setCommentsCount }) => {
  const [err, setErr] = useState(null)
  const deleteComment = () => {
    setErr(null)
    setComments((currComments) => {
      return currComments.filter((comment) => comment_id !== comment.comment_id)
    })
    setCommentsCount((currentComments) => currentComments - 1)
    deleteCommentById(comment_id).catch((err) => {
      setErr('Sorry, something went wrong!')
    })
  }
  if (err) return <p>{err}</p>
  return (
    <button className='d-block m-auto p-1' onClick={deleteComment}>
      Delete
    </button>
  )
}
export default DeleteComment
