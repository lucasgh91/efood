import { useGetRestaurantesQuery } from '../../services/api'
import Error from '../../Components/Error'
import Header from '../../Components/Header'
import ListaRestaurantes from '../../Components/ListaRestaurantes'
import Footer from '../../Components/Footer'
import { BarLoader } from 'react-spinners'
import { cores, LoaderContainer } from '../../utils/styles'

const Home = () => {
  const { data: restaurantes, isLoading, isError } = useGetRestaurantesQuery()

  return (
    <>
      <Header />
      {restaurantes && <ListaRestaurantes restaurantes={restaurantes} />}
      {isLoading && (
        <LoaderContainer className="container">
          <BarLoader width="200px" height="10px" color={cores.vermelho} />
        </LoaderContainer>
      )}
      {isError && <Error>Não foi possível obter a lista de restaurantes</Error>}
      <Footer />
    </>
  )
}

export default Home
