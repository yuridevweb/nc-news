import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/user'
import { getCommentsByArticle } from '../utils/api'
import PostComment from './PostComment'
import DeleteComment from './DeleteComment'
import Card from 'react-bootstrap/Card'

const Comments = ({ article_id, setCommentsCount, commentsCount }) => {
  const { userOnline } = useContext(UserContext)
  const [comments, setComments] = useState([])
  useEffect(() => {
    getCommentsByArticle(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi)
    })
  }, [])

  return (
    <>
      <h2>Comments</h2>
      <PostComment
        article_id={article_id}
        setComments={setComments}
        setCommentsCount={setCommentsCount}
      ></PostComment>
      <ul>
        {comments
          .slice(0)
          .reverse()
          .map((comment) => {
            return (
              <li key={comment.comment_id}>
                <Card className='mb-2 m-auto text-center'>
                  <Card.Body>
                    <Card.Text className='mb-1 text-muted'>
                      Posted by {comment.author} on{' '}
                      {comment.created_at.slice(0, 10)}
                    </Card.Text>
                    {comment.body}

                    {userOnline.username !== comment.author ? (
                      <p></p>
                    ) : (
                      <DeleteComment
                        comment_id={comment.comment_id}
                        setComments={setComments}
                        setCommentsCount={setCommentsCount}
                      ></DeleteComment>
                    )}
                  </Card.Body>
                </Card>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Comments
