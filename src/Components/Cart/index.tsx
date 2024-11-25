import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cart from '../../assets/images/cart.svg'
import { RootReducer } from '../../store'
import { closeCart, clear } from '../../store/reducers/cart'
import CartItem from '../CartItem'
import { FormataPreco } from '../../utils/functions'
import * as S from './styles'
import { useFormik } from 'formik'
import { useUpdateOrderMutation } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [cartStagePosition, setCartStagePosition] = useState('cart')
  const [updateOrder, { data, isSuccess, isLoading, reset }] =
    useUpdateOrderMutation()

  const resetRef = useRef(reset)
  resetRef.current = reset

  const closeTheCart = () => {
    dispatch(closeCart())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, index) => {
      return (acumulador += index.preco)
    }, 0)
  }

  const concluirPedido = () => {
    dispatch(clear())
    dispatch(closeCart())
    setCartStagePosition('cart')
    navigate('/')
    resetRef.current()
  }

  const changeStage = (reverse?: boolean) => {
    switch (cartStagePosition) {
      case 'cart':
        return setCartStagePosition('delivery')
      case 'delivery':
        if (reverse) return setCartStagePosition('cart')
        return setCartStagePosition('payment')
      case 'payment':
        if (reverse) return setCartStagePosition('delivery')
        return setCartStagePosition('confirmation')
      case 'confirmation':
        if (reverse) return setCartStagePosition('payment')
    }
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardFullName: '',
      cardNumber: '',
      cardCvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string()
        .matches(/^[0-9]{5}-[0-9]{3}$/)
        .required(),
      number: Yup.string().min(1).required(),
      complement: Yup.string(),
      cardFullName: Yup.string().required(),
      cardNumber: Yup.string().min(19).required(),
      cardCvv: Yup.string().min(3).required(),
      expiresMonth: Yup.string().min(2).required(),
      expiresYear: Yup.string().min(2).required()
    }),
    onSubmit: (values, { resetForm }) => {
      updateOrder({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardFullName,
            number: values.cardNumber,
            code: Number(values.cardCvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
      resetForm()
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isInvalid = fieldName in form.errors
    const isTouched = fieldName in form.touched
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.CartStylized className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeTheCart} />
      <S.Sidebar>
        <form onSubmit={form.handleSubmit}>
          <div className={cartStagePosition === 'cart' ? 'is-open' : ''}>
            {!items.length && (
              <S.CartEmpty>
                <img src={cart} alt="Carrinho" />
                <h3>Carrinho vazio</h3>
              </S.CartEmpty>
            )}
            <ul>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  foto={item.foto}
                  preco={item.preco}
                  nome={item.nome}
                />
              ))}
            </ul>
            <S.CartDescription>
              <S.CartPrices>
                <p>Valor Total:</p>
                <p>{FormataPreco(getTotalPrice())}</p>
              </S.CartPrices>
              <S.CartButton
                type="button"
                onClick={() => changeStage()}
                disabled={items.length === 0 ? true : false}>
                Continuar com a entrega
              </S.CartButton>
            </S.CartDescription>
          </div>
          <div className={cartStagePosition === 'delivery' ? 'is-open' : ''}>
            <S.FormGroup>
              <h3>Entrega</h3>
              <S.InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  className={checkInputHasError('fullName') ? 'error' : ''}
                  type="text"
                  name="fullName"
                  id="fullName"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.fullName}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  className={checkInputHasError('address') ? 'error' : ''}
                  autoComplete="true"
                  type="text"
                  name="address"
                  id="address"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.address}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  className={checkInputHasError('city') ? 'error' : ''}
                  type="text"
                  name="city"
                  id="city"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.city}
                />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.zipCode}
                    mask="99999-999"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    className={checkInputHasError('number') ? 'error' : ''}
                    type="number"
                    name="number"
                    id="number"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.number}
                  />
                </S.InputGroup>
              </S.Row>
              <S.InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  className={checkInputHasError('complement') ? 'error' : ''}
                  type="text"
                  name="complement"
                  id="complement"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.complement}
                />
              </S.InputGroup>
            </S.FormGroup>
            <S.CartButton type="button" onClick={() => changeStage()}>
              Continuar com o pagamento
            </S.CartButton>
            <S.CartButton type="button" onClick={() => changeStage(true)}>
              Voltar para o carrinho
            </S.CartButton>
          </div>
          <div
            className={
              cartStagePosition === 'payment' && !isSuccess ? 'is-open' : ''
            }>
            <S.FormGroup>
              <h3>Pagamento - Valor a pagar {FormataPreco(getTotalPrice())}</h3>
              <S.InputGroup>
                <label htmlFor="cardFullName">Nome no cartão</label>
                <input
                  className={checkInputHasError('cardFullName') ? 'error' : ''}
                  type="text"
                  name="cardFullName"
                  id="cardFullName"
                  onBlur={form.handleBlur}
                  onChange={form.handleChange}
                  value={form.values.cardFullName}
                />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup className="flex-one">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cardNumber}
                    mask="9999 9999 9999 9999"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardCvv">CVV</label>
                  <InputMask
                    className={checkInputHasError('cardCvv') ? 'error' : ''}
                    type="text"
                    name="cardCvv"
                    id="cardCvv"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cardCvv}
                    mask="999"
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    type="text"
                    name="expiresMonth"
                    id="expiresMonth"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.expiresMonth}
                    mask="99"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    type="text"
                    name="expiresYear"
                    id="expiresYear"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.expiresYear}
                    mask="99"
                  />
                </S.InputGroup>
              </S.Row>
            </S.FormGroup>
            <S.CartButton
              type="submit"
              disabled={Object.keys(form.errors).length > 0}>
              {isLoading ? 'Enviando pedido...' : 'Confirmar pagamento'}
            </S.CartButton>
            <S.CartButton type="button" onClick={() => changeStage(true)}>
              Voltar para a entrega
            </S.CartButton>
          </div>
          <div className={isSuccess ? 'is-open' : ''}>
            <S.Confirmation>
              <h3>Pedido realizado - {data?.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.Confirmation>
            <S.CartButton type="button" onClick={concluirPedido}>
              Concluir
            </S.CartButton>
          </div>
        </form>
      </S.Sidebar>
    </S.CartStylized>
  )
}
export default Cart
