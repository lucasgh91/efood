import Restaurante from '../../models/Restaurante'
import {
  Descricao,
  LinkStylized,
  RestauranteStylized,
  Tag,
  TagSection
} from './styles'
import estrela from '../../assets/images/estrela.png'

const RestauranteCard = ({
  id,
  titulo,
  descricao,
  capa,
  avaliacao,
  destacado,
  tipo
}: Restaurante) => (
  <RestauranteStylized>
    <img src={capa} alt={titulo} />
    <TagSection>
      {destacado ? <Tag>Destaque da semana</Tag> : ''}
      <Tag>{tipo}</Tag>
    </TagSection>
    <Descricao>
      <h2>
        {titulo}
        <div>
          <p>{avaliacao}</p>
          <img src={estrela} alt="Estrela" />
        </div>
      </h2>
      <p>{descricao}</p>
      <div>
        <LinkStylized to={'/restaurante/' + id}>Saber mais</LinkStylized>
      </div>
    </Descricao>
  </RestauranteStylized>
)
export default RestauranteCard
