import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import ListaPratos from '../../Components/ListaPratos'
import SubHeader from '../../Components/SubHeader'
import SubHero from '../../Components/SubHero'
import { dados } from '../../data/restaurantes'

const Perfil = () => {
  const { id } = useParams()

  if (id) {
    const restaurante = dados.filter((r) => r.id === parseInt(id))

    return (
      <>
        <SubHeader />
        <SubHero
          titulo={restaurante[0].titulo}
          especialidade={restaurante[0].especialidade}
        />
        <ListaPratos pratos={restaurante[0].pratos} />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <SubHeader />
        <SubHero titulo={''} especialidade={''} />
        <ListaPratos pratos={[]} />
        <Footer />
      </>
    )
  }
}
export default Perfil
