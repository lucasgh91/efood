import background from '../../assets/images/vector.png'

import styled from 'styled-components'
import { cores } from '../../utils/styles'

export const HeaderStylized = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 360px;
  padding: 40px 0;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    text-align: center;
    max-width: 539px;
    color: ${cores.vermelho};
    font-size: 36px;
  }
`
