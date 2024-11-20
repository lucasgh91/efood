import { Prato } from '../../models/Prato'
import PratoCard from '../PratoCard'
import { ListaPratosStylized } from './styles'

type Props = {
  cardapio: Prato[]
}

const ListaPratos = ({ cardapio }: Props) => {
  return (
    <div className="container">
      <ListaPratosStylized>
        {cardapio.map((p) => (
          <li key={p.id}>
            <PratoCard prato={p} />
          </li>
        ))}
      </ListaPratosStylized>
    </div>
  )
}
export default ListaPratos
