import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import NotFound from './Pages/NotFound'

const Rotas = () => {
  const location = useLocation()
  return (
    <Routes>
      <Route path="*" element={<NotFound error={location.pathname} />} />
      <Route path="/" element={<Home />} />
      <Route path="restaurante">
        <Route path=":id" element={<Perfil />} />
      </Route>
    </Routes>
  )
}

export default Rotas
