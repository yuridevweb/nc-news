import { useEffect, useState } from 'react'
import { getArticles } from '../utils/api'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { topic } = useParams()
  useEffect(() => {
    setIsLoading(true)
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi)
      setIsLoading(false)
    })
  }, [topic])

  return (
    <main>
      <h2>All articles</h2>
      {isLoading ? (
        <Spinner animation='border' />
      ) : (
        <ul>
          {articles.map((article) => {
            return (
              <li className='articles-list' key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <Card className='text-center'>
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                      <Row>
                        <Col sm={6}>
                          Posted on: {article.created_at.slice(0, 10)}
                        </Col>
                        <Col sm={3}>Comments: {article.comment_count}</Col>
                        <Col sm={3}>Votes: {article.votes}</Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}

export default Articles
