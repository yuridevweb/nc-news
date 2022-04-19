import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { getTopics } from '../utils/api'

const Nav = () => {
  const [topics, setTopics] = useState([])
  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi)
    })
  }, [])
  console.log(topics)
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
          //const link = '/articles/' + {topic.slug}
          return <Link to='/articles/coding'>{topic.slug}</Link>
        })}
      </Container>
    </Navbar>
  )
}
export default Nav
