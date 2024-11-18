import styled from 'styled-components'
import background from '../../assets/images/vector.png'
import { cores } from '../../utils/styles'
import { Link } from 'react-router-dom'

export const SubHeaderStylized = styled.header`
  background-image: url(${background});
  height: 163px;
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 18px;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LinkStylized = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`
