import styled from 'styled-components'
import { cores } from '../../utils/styles'

export const CartStylized = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Sidebar = styled.aside`
  width: 400px;
  height: 100%;
  background-color: ${cores.vermelho};
  padding: 32px 8px;
`

export const CartDescription = styled.div`
  margin-top: 40px;

  button {
    width: 100%;
    background-color: ${cores.cremeEscuro};
    border: none;
    padding: 4px;
    font-weight: bold;
    font-size: 14px;
    color: ${cores.vermelho};
    cursor: pointer;
    &:disabled {
      opacity: 0.4;
      cursor: default;
    }
  }
`

export const CartPrices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${cores.cremeEscuro};
  font-weight: bold;
  font-size: 14px;
`

export const CartEmpty = styled.div`
  text-align: center;
  color: ${cores.cremeEscuro};
  img {
    width: 80px;
  }
`
