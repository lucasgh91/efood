import { useDispatch } from 'react-redux'
import lixeira from '../../assets/images/lixeira.svg'
import { FormataPreco } from '../../utils/functions'
import { CartItemStylized, RemoveButton } from './styles'
import { remove } from '../../store/reducers/cart'

type Props = {
  foto: string,
  nome: string,
  preco: number,
  id: number
}

const CartItem = ({ foto, nome, preco, id }: Props) => {
  const dispatch = useDispatch()

  const removePrato = () => {
    dispatch(remove(id))
  }

  return (
    <CartItemStylized>
      <img src={foto} alt="" />
      <div>
        <h3>{nome}</h3>
        <p>{FormataPreco(preco)}</p>
        <RemoveButton onClick={removePrato}>
          <img src={lixeira} alt="Remover produto" />
        </RemoveButton>
      </div>
    </CartItemStylized>
  )
}
export default CartItem
