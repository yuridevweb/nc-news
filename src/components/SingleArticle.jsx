import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesById } from '../utils/api'
import Votes from './Votes'
import Comments from './Comments'

import { Spinner } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'

const SingleArticle = () => {
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null)
  const { article_id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [singleArticle, setSingleArticle] = useState('')
  useEffect(() => {
    setIsLoading(true)
    getArticlesById(article_id)
      .then((articleFromApi) => {
        setSingleArticle(articleFromApi)
        setIsLoading(false)
      })
      .catch((err) => {
        setError("Sorry, article doesn't exist...")
      })
  }, [article_id, comments.length])

  if (error) return <p>{error}</p>
  if (isLoading) return <Spinner animation='border' />
  return (
    <main>
      <Card className='text-center'>
        <Card.Body>
          <Card.Text className='mb-1 text-muted'>
            Posted by {singleArticle.author} on{' '}
            {singleArticle.created_at.slice(0, 10)}
          </Card.Text>
          <Card.Header>
            <h1 className='article-header'>{singleArticle.title}</h1>
          </Card.Header>
          <Card.Text className='lead'>{singleArticle.body}</Card.Text>
          <Card.Footer className='text-muted'>
            <Row className='mt-2'>
              <Col
                className='d-flex justify-content-center align-items-center mb-3'
                sm={6}
              >
                Comments: {comments.length}
              </Col>
              <Col
                className='d-flex justify-content-center align-items-center'
                sm={6}
              >
                <Votes
                  votes={singleArticle.votes}
                  article_id={singleArticle.article_id}
                ></Votes>
              </Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
      <Comments
        article_id={singleArticle.article_id}
        comments={comments}
        setComments={setComments}
      ></Comments>
    </main>
  )
}

export default SingleArticle
