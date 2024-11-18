import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
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
