import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from './context/user'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <UserProvider>
      <Container>
        <App />
      </Container>
    </UserProvider>
  </BrowserRouter>
)
