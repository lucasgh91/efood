import { useParams } from 'react-router-dom'
import SubHeader from '../../Components/SubHeader'
import SubHero from '../../Components/SubHero'
import ListaPratos from '../../Components/ListaPratos'
import Footer from '../../Components/Footer'
import Error from '../../Components/Error'
import { useGetRestauranteQuery } from '../../services/api'
import { cores, LoaderContainer } from '../../utils/styles'
import { BarLoader } from 'react-spinners'

const Perfil = () => {
  const { id } = useParams() as { id: string }

  const { data: restaurante, isLoading, isError } = useGetRestauranteQuery(id)

  return (
    <>
      <SubHeader />
      {restaurante?.capa && restaurante?.cardapio && (
        <>
          <SubHero restaurante={restaurante} />
          <ListaPratos cardapio={restaurante.cardapio} />
        </>
      )}
      {isLoading && (
        <LoaderContainer className="container">
          <BarLoader width="200px" height="10px" color={cores.vermelho} />
        </LoaderContainer>
      )}
      {isError && <Error>Restaurante não encontrado!</Error>}
      <Footer />
    </>
  )
}
export default Perfil
