import { Dispatch, SetStateAction } from 'react'
import { Prato } from '../../models/Prato'
import { ButtonFechar, ModalContent, ModalStylized } from './styles'
import fecharImg from '../../assets/images/fechar.svg'
import { ButtonStylized } from '../../utils/styles'
import { useDispatch } from 'react-redux'
import { add, openCart } from '../../store/reducers/cart'
import { FormataPreco } from '../../utils/functions'

type ModalType = {
  prato: Prato,
  modalToggle: boolean,
  setModalToggle: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ prato, modalToggle, setModalToggle }: ModalType) => {
  const dispatch = useDispatch()

  const addPrato = () => {
    dispatch(add(prato))
    setModalToggle(false)
    dispatch(openCart())
  }

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
          <ButtonStylized onClick={addPrato}>
            Adicionar ao carrinho - {FormataPreco(prato.preco)}
          </ButtonStylized>
        </div>
      </ModalContent>
    </ModalStylized>
  )
}
export default Modal
