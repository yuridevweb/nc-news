import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Nav = () => {
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
        <Link to='/articles'>Articles</Link>
      </Container>
    </Navbar>
  )
}

export default Nav
