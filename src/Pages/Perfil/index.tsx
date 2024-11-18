import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import ListaPratos from '../../Components/ListaPratos'
import SubHeader from '../../Components/SubHeader'
import SubHero from '../../Components/SubHero'
import { dados } from '../../data/restaurantes'
import Restaurante from '../../models/Restaurante'

const Perfil = () => {
  const { id } = useParams()

  if (id) {
    const restaurante = dados.filter((r) => r.id === parseInt(id))

    return (
      <>
        <SubHeader />
        <SubHero restaurante={restaurante[0]} />
        <ListaPratos pratos={restaurante[0].pratos} />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <SubHeader />
        <SubHero
          restaurante={new Restaurante(1, '', '', '', [], 0, false, '')}
        />
        <ListaPratos pratos={[]} />
        <Footer />
      </>
    )
  }
}
export default Perfil
