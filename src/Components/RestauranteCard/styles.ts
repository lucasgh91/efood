import styled from 'styled-components'
import { cores } from '../../utils/styles'
import { Link } from 'react-router-dom'

export const RestauranteStylized = styled.div`
  max-width: 472px;
  border: 1px solid ${cores.vermelho};
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  position: relative;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`

export const Descricao = styled.div`
  padding: 8px;
  font-size: 14px;

  h2 {
    line-height: 25px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    div {
      display: flex;
      img {
        width: 21px;
        height: 21px;
        margin-left: 8px;
      }
    }
  }
`

export const LinkStylized = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border: none;
  background-color: ${cores.vermelho};
  color: ${cores.creme};
  padding: 4px 6px;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
`

export const Tag = styled.button`
  border: none;
  background-color: ${cores.vermelho};
  color: ${cores.creme};
  padding: 4px 6px;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
  margin-top: 0;
  margin-left: 8px;
`

export const TagSection = styled.div`
  position: absolute;
  font-size: 14px;
  top: 16px;
  right: 16px;
`
