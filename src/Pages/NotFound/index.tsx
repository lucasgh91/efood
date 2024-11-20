import Footer from '../../Components/Footer'
import SubHeader from '../../Components/SubHeader'
import Error from '../../Components/Error'

type Props = {
  error: string
}

const NotFound = ({ error }: Props) => (
  <>
    <SubHeader />
    <Error>{`Página ${error} não encontrada`}</Error>
    <Footer />
  </>
)
export default NotFound
