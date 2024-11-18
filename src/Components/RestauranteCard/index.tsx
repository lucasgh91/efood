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
  imagem,
  rating,
  destaque,
  especialidade
}: Restaurante) => (
  <RestauranteStylized>
    <img src={imagem} alt={titulo} />
    <TagSection>
      {destaque ? <Tag>Destaque da semana</Tag> : ''}
      <Tag>{especialidade}</Tag>
    </TagSection>
    <Descricao>
      <h2>
        {titulo}
        <div>
          <p>{rating}</p>
          <img src={estrela} alt="Estrela" />
        </div>
      </h2>
      <p>{descricao}</p>
      <LinkStylized to={'/restaurante/' + id}>Saber mais</LinkStylized>
    </Descricao>
  </RestauranteStylized>
)
export default RestauranteCard
