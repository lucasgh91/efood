import styled from 'styled-components'
import { cores } from '../../utils/styles'

export const PratoCardStylized = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${cores.vermelho};
  color: ${cores.cremeEscuro};
  font-size: 14px;
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    padding: 8px;
    padding-left: 0;
    font-size: 16px;
  }

  p {
    line-height: 22px;
  }
`
