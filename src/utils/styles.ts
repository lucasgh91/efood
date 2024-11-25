import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  vermelhoClaro: '#ff9a9a',
  creme: '#FFF8F2',
  cremeEscuro: '#FFEBD9',
  branco: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${cores.creme};
  }
  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const ButtonStylized = styled.button`
  cursor: pointer;
  background-color: ${cores.cremeEscuro};
  color: ${cores.vermelho};
  border: none;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  margin-top: 8px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  span {
    color: ${cores.vermelho};
  }
`
