import { useState, useEffect } from 'react'
import { getArticles } from '../utils/api'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Home = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi)
    })
  }, [])
  return (
    <>
      <header>
        <h1 className='p-3'>Most Recent Posts</h1>
      </header>
      <main>
        <ul>
          {articles
            .slice(-10)
            .reverse()
            .map((article) => {
              return (
                <li className='articles-list' key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <Card className='text-center'>
                      <Card.Body>
                        <Card.Title className='article-title'>
                          {article.title}
                        </Card.Title>
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
      </main>
    </>
  )
}

export default Home
