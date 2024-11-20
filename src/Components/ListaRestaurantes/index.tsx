import Rest from '../../models/Restaurante'
import RestauranteCard from '../RestauranteCard'
import { ListaRestaurantesStylized } from './styles'

type Props = {
  restaurantes: Rest[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <div className="container">
    <ListaRestaurantesStylized>
      {restaurantes.map((r) => (
        <li key={r.id}>
          <RestauranteCard
            id={r.id}
            titulo={r.titulo}
            descricao={r.descricao}
            capa={r.capa}
            avaliacao={r.avaliacao}
            destacado={r.destacado}
            tipo={r.tipo}
            cardapio={r.cardapio}
          />
        </li>
      ))}
    </ListaRestaurantesStylized>
  </div>
)
export default ListaRestaurantes
