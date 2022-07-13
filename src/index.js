import { render } from 'react-dom'

import App from './App'

const rootElement = document.getElementById('root')
render(<App />, rootElement)
// import { createRoot } from 'react-dom/client'
// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)
// root.render(<App tab="home" />)
