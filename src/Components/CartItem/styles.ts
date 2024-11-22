import styled from 'styled-components'
import { cores } from '../../utils/styles'

export const CartItemStylized = styled.li`
  display: flex;
  background-color: ${cores.cremeEscuro};
  width: 100%;
  height: 100px;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
  color: ${cores.vermelho};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }
`

export const RemoveButton = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 8px;
  right: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`
