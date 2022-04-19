import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Articles from './components/Articles'

import Container from 'react-bootstrap/Container'
function App() {
  return (
    <Container>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/articles' element={<Articles />}></Route>
        </Routes>
      </div>
    </Container>
  )
}

export default App
