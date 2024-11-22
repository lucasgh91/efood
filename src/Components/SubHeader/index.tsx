import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import { LinkStylized, SubHeaderStylized } from './styles'
import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const SubHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openTheCart = () => {
    dispatch(openCart())
  }

  return (
    <SubHeaderStylized>
      <div className="container">
        <LinkStylized to="/">Restaurantes</LinkStylized>
        <img src={logo} alt="eFood" />
        <button onClick={openTheCart}>
          {items.length} produto(s) no carrinho
        </button>
      </div>
    </SubHeaderStylized>
  )
}
export default SubHeader
