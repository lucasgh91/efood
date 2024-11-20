import styled from 'styled-components'
import { cores } from '../../utils/styles'

type Props = {
  $aberto: boolean
}

export const ModalStylized =
  styled.div <
  Props >
  `
  display: ${(props) => (props.$aberto ? 'flex' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const ModalContent = styled.div`
  position: relative;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 32px;
  display: flex;

  div {
    margin-left: 24px;
    p {
      margin-bottom: 16px;
    }
    button {
      width: auto;
      padding: 4px 7px;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }
`

export const ButtonFechar = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  img {
    width: 25px;
    height: 25px;
  }
`
