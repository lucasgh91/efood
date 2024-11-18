import styled from 'styled-components'
import { cores } from '../../utils/styles'

export const FooterStylized = styled.footer`
  background-color: ${cores.cremeEscuro};
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-bottom: 32.5px;
  }

  ul {
    display: flex;
    column-gap: 8px;
    margin-bottom: 80px;
  }

  p {
    text-align: center;
    max-width: 480px;
    font-size: 10px;
    color: ${cores.vermelho};
  }
`
