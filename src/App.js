import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import TestingPage from './pages/TestingPage'
import { createGlobalStyle } from 'styled-components'

function App() {
  //STYLES
  const GlobalStyle = createGlobalStyle`
  div {
      font-family: 'Roboto', Helvetica, sans-serif;
  }
  body {
    margin: 0px;
  }
  a{
    text-decoration:none;
  }
  *{box-sizing:border-box;}
  html,
body,
#root {
height: 100%;
width: 100%;
min-width: 0;
min-height: 0;
}
`

  return (
    <main>
      <React.StrictMode>
        <Router>
          <GlobalStyle />
          <NavBar />
          <Routes>
            <Route exact path="/user/:id" element={<Home />} />
            <Route path="/test" element={<TestingPage />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </main>
  )
}

export default App
