import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Restaurante from '../../models/Restaurante'
import SubHeader from '../../Components/SubHeader'
import SubHero from '../../Components/SubHero'
import ListaPratos from '../../Components/ListaPratos'
import Footer from '../../Components/Footer'
import Error from '../../Components/Error'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => {
        return res.json()
      })
      .then((res) => setRestaurante(res))
  }, [id, restaurante])

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
