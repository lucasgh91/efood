import { HeaderStylized } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderStylized>
    <div className="container">
      <img src={logo} alt="eFood" />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </div>
  </HeaderStylized>
)
export default Header
