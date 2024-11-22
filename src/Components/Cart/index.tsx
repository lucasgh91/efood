import { useDispatch, useSelector } from 'react-redux'
import {
  CartDescription,
  CartEmpty,
  CartPrices,
  CartStylized,
  Overlay,
  Sidebar
} from './styles'
import { closeCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import CartItem from '../CartItem'
import { FormataPreco } from '../../utils/functions'
import cart from '../../assets/images/cart.svg'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeTheCart = () => {
    dispatch(closeCart())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, index) => {
      return (acumulador += index.preco)
    }, 0)
  }

  return (
    <CartStylized className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeTheCart} />
      <Sidebar>
        {!items.length && (
          <CartEmpty>
            <img src={cart} alt="Carrinho" />
            <h3>Carrinho vazio</h3>
          </CartEmpty>
        )}
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              foto={item.foto}
              preco={item.preco}
              nome={item.nome}
            />
          ))}
        </ul>
        <CartDescription>
          <CartPrices>
            <p>Valor Total:</p>
            <p>{FormataPreco(getTotalPrice())}</p>
          </CartPrices>
          <button disabled={items.length === 0 ? true : false}>
            Continuar com a entrega
          </button>
        </CartDescription>
      </Sidebar>
    </CartStylized>
  )
}
export default Cart
