import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopics } from '../utils/api'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Nav = () => {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi)
    })
  }, [])

  return (
    /* <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */

    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='/'>NC-News</Navbar.Brand>
        <Link to='/'>Home</Link>
        <Link to='/articles'>All Articles</Link>
        {topics.map((topic) => {
          return <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
        })}
      </Container>
    </Navbar>
  )
}
export default Nav
