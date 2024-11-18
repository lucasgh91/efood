import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './utils/styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
