import logo from '../../assets/images/logo.png'
import { LinkStylized, SubHeaderStylized } from './styles'

const SubHeader = () => (
  <SubHeaderStylized>
    <div className="container">
      <LinkStylized to="/">Restaurantes</LinkStylized>
      <img src={logo} alt="eFood" />
      <p>0 produto(s) no carrinho</p>
    </div>
  </SubHeaderStylized>
)
export default SubHeader
