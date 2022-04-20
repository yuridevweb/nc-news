import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesById } from '../utils/api'

import { Spinner } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'

const SingleArticle = () => {
  const { article_id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [singleArticle, setSingleArticle] = useState('')
  useEffect(() => {
    setIsLoading(true)
    getArticlesById(article_id).then((articleFromApi) => {
      setSingleArticle(articleFromApi)
      setIsLoading(false)
    })
  }, [article_id])

  if (isLoading) return <Spinner animation='border' />

  return (
    <main>
      <Card className='text-center'>
        <Card.Body>
          <Card.Text className='mb-1 text-muted'>
            Posted by {singleArticle.author} on{' '}
            {singleArticle.created_at.slice(0, 10)}
          </Card.Text>
          <Card.Header>{singleArticle.title}</Card.Header>
          <Card.Text>{singleArticle.body}</Card.Text>
          <Card.Footer className='text-muted'>
            <Row>
              <Col sm={6}>Comments: {singleArticle.comment_count}</Col>
              <Col sm={6}>Votes: {singleArticle.votes}</Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </main>
  )
}

export default SingleArticle
