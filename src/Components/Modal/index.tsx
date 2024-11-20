import { Dispatch, SetStateAction } from 'react'
import { Prato } from '../../models/Prato'
import { ButtonFechar, ModalContent, ModalStylized } from './styles'
import fecharImg from '../../assets/images/fechar.svg'
import { ButtonStylized } from '../../utils/styles'

type ModalType = {
  prato: Prato,
  modalToggle: boolean,
  setModalToggle: Dispatch<SetStateAction<boolean>>
}
const formataPreco = (preco: number) => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ prato, modalToggle, setModalToggle }: ModalType) => {
  return (
    <ModalStylized $aberto={modalToggle}>
      <ModalContent className="container">
        <ButtonFechar onClick={() => setModalToggle(false)}>
          <img src={fecharImg} alt="Fechar" />
        </ButtonFechar>
        <img src={prato.foto} alt={prato.nome} />
        <div>
          <h2>{prato.nome}</h2>
          <p>{prato.descricao}</p>
          <p>Serve: {prato.porcao}</p>
          <ButtonStylized>
            Adicionar ao carrinho - {formataPreco(prato.preco)}
          </ButtonStylized>
        </div>
      </ModalContent>
    </ModalStylized>
  )
}
export default Modal
