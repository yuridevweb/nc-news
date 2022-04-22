import { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { postNewComment } from '../utils/api'

const PostComment = ({ article_id, setComments, setCommentsCount }) => {
  const { userOnline } = useContext(UserContext)
  const [newComment, setNewComment] = useState([])
  const handleSumbit = (e) => {
    e.preventDefault()
    setCommentsCount((currentComments) => currentComments + 1)
    postNewComment(article_id, newComment, userOnline).then((postedComment) => {
      setComments((currComments) => {
        const newComments = [...currComments, postedComment]
        return newComments
      })
      setNewComment('')
    })
  }
  return (
    <form onSubmit={handleSumbit} className='m-3'>
      {userOnline.username === '' ? (
        <p>Only logged in users can post comments</p>
      ) : (
        <>
          <label htmlFor='comment-form'>Add a comment... </label>
          <input
            className='post-comment-form'
            id='comment-form'
            type='text'
            minLength='3'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required={true}
          ></input>
          <button className='px-4 p-1 m-3'>Post</button>
        </>
      )}
    </form>
  )
}

export default PostComment
