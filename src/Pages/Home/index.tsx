import { useEffect, useState } from 'react'
import Restaurante from '../../models/Restaurante'
import Header from '../../Components/Header'
import ListaRestaurantes from '../../Components/ListaRestaurantes'
import Footer from '../../Components/Footer'
import Error from '../../Components/Error'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      {restaurantes ? (
        <ListaRestaurantes restaurantes={restaurantes} />
      ) : (
        <Error>Não foi possível obter a lista de restaurantes</Error>
      )}
      <Footer />
    </>
  )
}
export default Home
