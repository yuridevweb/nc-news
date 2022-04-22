import { useEffect, useState } from 'react'
import { getArticles } from '../utils/api'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link, useSearchParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState('desc')
  const [sort, setSort] = useState('created_at')
  const { topic } = useParams()
  useEffect(() => {
    setIsLoading(true)
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi)
      setIsLoading(false)
    })
  }, [topic])

  const handleSortBy = (e) => {
    let params = { sort_by: e.target.value, order: order }
    setSearchParams(params)
    setSort(params.sort_by)
    setIsLoading(true)
    getArticles(topic, params.sort_by, order).then((articlesFromApi) => {
      setArticles(articlesFromApi)
      setIsLoading(false)
    })
  }

  const handleOrderBy = (e) => {
    let params = { sort_by: sort, order_by: e.target.value }
    setSearchParams(params)
    setOrder(params.order_by)
    setIsLoading(true)
    getArticles(topic, sort, params.order_by).then((articlesFromApi) => {
      setArticles(articlesFromApi)
      setIsLoading(false)
    })
  }

  return (
    <main>
      {!topic && <h2>All topics</h2>}
      <h2 className='capitalize'>{topic}</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <label htmlFor='sort-by-select'>Sort:</label>
          </div>
          <div className='col-6'>
            <label htmlFor='order-by-select'>Order:</label>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <select
              className='form-select'
              id='sort-by-select'
              onChange={handleSortBy}
            >
              <option value='created_at'>By Date</option>
              <option value='votes'>By Votes</option>
              <option value='comment_count'>By Comments</option>
            </select>
          </div>

          <div className='col-6'>
            <select
              className='form-select'
              id='order-by-select'
              onChange={handleOrderBy}
            >
              <option value='desc'>Descending</option>
              <option value='asc'>Ascending</option>
            </select>
          </div>
        </div>
      </div>

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
      )}
    </main>
  )
}

export default Articles
