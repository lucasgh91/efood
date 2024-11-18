import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { FooterStylized } from './styles'

const Footer = () => (
  <FooterStylized>
    <img src={logo} alt="eFood" />
    <ul>
      <li>
        <a href="/">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
    </ul>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterStylized>
)
export default Footer
