import { Prato } from '../../models/Prato'
import PratoCard from '../PratoCard'
import { ListaPratosStylized } from './styles'

type Props = {
  pratos: Prato[]
}

const ListaPratos = ({ pratos }: Props) => {
  return (
    <ListaPratosStylized>
      {pratos.map((p) => (
        <li key={p.id}>
          <PratoCard
            id={p.id}
            imagem={p.imagem}
            titulo={p.titulo}
            descricao={p.descricao}
          />
        </li>
      ))}
    </ListaPratosStylized>
  )
}
export default ListaPratos
