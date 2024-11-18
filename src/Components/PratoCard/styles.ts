import styled from 'styled-components'
import { cores } from '../../utils/styles'

export const PratoCardStylized = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${cores.vermelho};
  color: ${cores.cremeEscuro};
  font-size: 14px;

  img {
    width: 100%;
  }

  h3 {
    padding: 8px;
    padding-left: 0;
    font-size: 16px;
  }

  p {
    line-height: 22px;
  }

  button {
    background-color: ${cores.cremeEscuro};
    color: ${cores.vermelho};
    border: none;
    font-weight: bold;
    padding: 4px;
    width: 100%;
    margin-top: 8px;
  }
`
