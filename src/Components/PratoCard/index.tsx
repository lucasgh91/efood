import { Prato } from '../../models/Prato'
import { PratoCardStylized } from './styles'

const PratoCard = ({ imagem, titulo, descricao }: Prato) => (
  <PratoCardStylized>
    <img src={imagem} alt={imagem} />
    <h3>{titulo}</h3>
    <p>{descricao}</p>
    <button>Adicionar ao carrinho</button>
  </PratoCardStylized>
)
export default PratoCard
