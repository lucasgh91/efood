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
            imagem={r.imagem}
            rating={r.rating}
            destaque={r.destaque}
            especialidade={r.especialidade}
            pratos={r.pratos}
          />
        </li>
      ))}
    </ListaRestaurantesStylized>
  </div>
)
export default ListaRestaurantes
