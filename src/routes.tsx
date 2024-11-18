import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="restaurante">
      <Route path=":id" element={<Perfil />} />
    </Route>
  </Routes>
)

export default Rotas
