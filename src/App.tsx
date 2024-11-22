import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Rotas from './routes'
import { GlobalStyle } from './utils/styles'
import Cart from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}>
        <GlobalStyle />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
