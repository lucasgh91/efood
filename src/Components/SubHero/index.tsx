import { SubHeroStylized } from './styles'

type Props = {
  titulo: string,
  especialidade: string
}

const SubHero = ({ titulo, especialidade }: Props) => (
  <SubHeroStylized>
    <div className="container">
      <h2>{especialidade}</h2>
      <h1>{titulo}</h1>
    </div>
  </SubHeroStylized>
)
export default SubHero
