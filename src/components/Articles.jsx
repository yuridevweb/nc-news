import { useEffect, useState } from 'react'
import { getArticles } from '../utils/api'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'

const Articles = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles)
    })
  }, [])

  console.log(articles)
  return (
    <main>
      <h2>All articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li class='articles-list' key={article.article_id}>
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
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Articles
