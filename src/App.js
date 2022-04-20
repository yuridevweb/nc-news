import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'

import Container from 'react-bootstrap/Container'
function App() {
  return (
    <Container>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/articles' element={<Articles />}></Route>
          <Route path='/topics/:topic' element={<Articles />}></Route>
          <Route
            path='/articles/:article_id'
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </div>
    </Container>
  )
}

export default App
