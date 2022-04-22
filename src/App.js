import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Login from './components/Login'
import Logout from './components/Logout'
import ProfilePage from './components/ProfilePage'
function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/topics/:topic' element={<Articles />}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
      </Routes>
    </div>
  )
}

export default App
