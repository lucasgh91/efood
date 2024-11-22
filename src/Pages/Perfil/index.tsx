import { useParams } from 'react-router-dom'
import SubHeader from '../../Components/SubHeader'
import SubHero from '../../Components/SubHero'
import ListaPratos from '../../Components/ListaPratos'
import Footer from '../../Components/Footer'
import Error from '../../Components/Error'
import { useGetRestauranteQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id!)

  return (
    <>
      <SubHeader />
      {restaurante?.capa && restaurante?.cardapio ? (
        <>
          <SubHero restaurante={restaurante} />
          <ListaPratos cardapio={restaurante.cardapio} />
        </>
      ) : (
        <Error>Restaurante não encontrado!</Error>
      )}
      <Footer />
    </>
  )
}
export default Perfil
