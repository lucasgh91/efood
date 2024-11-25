import { useState } from 'react'
import { PratoCardStylized } from './styles'
import Modal from '../Modal'
import { Prato } from '../../models/Prato'
import { ButtonStylized } from '../../utils/styles'

type PratoCardType = {
  prato: Prato
}

const PratoCard = ({ prato }: PratoCardType) => {
  const [modalToggle, setModalToggle] = useState(false)

  return (
    <PratoCardStylized>
      <div>
        <img src={prato.foto} alt={prato.nome} />
        <h3>{prato.nome}</h3>
        <p>{`${prato.descricao.slice(0, 100)}...`}</p>
      </div>
      <ButtonStylized onClick={() => setModalToggle(true)}>
        Mais detalhes
      </ButtonStylized>
      <Modal
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
        prato={prato}
      />
    </PratoCardStylized>
  )
}
export default PratoCard
