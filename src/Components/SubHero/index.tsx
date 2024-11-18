import Restaurante from '../../models/Restaurante'
import { SubHeroStylized } from './styles'

type Props = {
  restaurante: Restaurante
}

const SubHero = ({ restaurante }: Props) => (
  <SubHeroStylized imagem={restaurante?.imagem}>
    <div className="container">
      <h2>{restaurante?.especialidade}</h2>
      <h1>{restaurante?.titulo}</h1>
    </div>
  </SubHeroStylized>
)
export default SubHero
