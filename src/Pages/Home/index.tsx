import { useGetRestaurantesQuery } from '../../services/api'
import Error from '../../Components/Error'
import Header from '../../Components/Header'
import ListaRestaurantes from '../../Components/ListaRestaurantes'
import Footer from '../../Components/Footer'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

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
