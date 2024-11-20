import Restaurante from '../../models/Restaurante'
import { SubHeroStylized } from './styles'

type Props = {
  restaurante: Restaurante
}

const SubHero = ({ restaurante }: Props) => (
  <SubHeroStylized
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurante.capa})`
    }}>
    <div className="container">
      <h2>{restaurante?.tipo}</h2>
      <h1>{restaurante?.titulo}</h1>
    </div>
  </SubHeroStylized>
)
export default SubHero
