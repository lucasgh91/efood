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
  width: 460px;
  height: 100%;
  background-color: ${cores.vermelho};
  padding: 32px 8px;

  > form > div {
    display: none;

    &.is-open {
      display: block;
    }
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;

  #cardCvv {
    width: 87px;
  }

  .flex-one {
    flex: 1;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.cremeEscuro};
  margin-bottom: 24px;

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }

  input {
    border: none;
    background-color: ${cores.cremeEscuro};
    padding: 8px;
    font-weight: bold;
    width: 100%;
    &.error {
      outline: red dashed 3px;
      background-color: ${cores.vermelhoClaro};
      &:focus-visible {
        outline: red dashed 3px;
      }
    }
    &:focus-visible {
      outline: none;
    }
  }
`

export const CartDescription = styled.div`
  margin-top: 40px;
`

export const CartPrices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${cores.cremeEscuro};
  font-weight: bold;
  font-size: 14px;
`

export const CartButton = styled.button`
  width: 100%;
  background-color: ${cores.cremeEscuro};
  border: none;
  padding: 4px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.vermelho};
  cursor: pointer;
  margin-bottom: 8px;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`

export const CartEmpty = styled.div`
  text-align: center;
  color: ${cores.cremeEscuro};
  img {
    width: 80px;
  }
`

export const Confirmation = styled.div`
  color: ${cores.cremeEscuro};
  font-size: 14px;
  line-height: 22px;

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 22px;
  }
`
