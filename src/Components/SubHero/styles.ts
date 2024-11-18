import styled from 'styled-components'
import img from '../../assets/images/ladolcevitatrattoria.png'
import { cores } from '../../utils/styles'

export const SubHeroStylized = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  padding-top: 25px;
  padding-bottom: 32px;
  color: ${cores.branco};
  font-size: 22px;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-weight: 100;
    }
  }
`
