import Header from '../../Components/Header'
import ListaRestaurantes from '../../Components/ListaRestaurantes'
import Footer from '../../Components/Footer'

import { dados } from '../../data/restaurantes'

const Home = () => (
  <>
    <Header />
    <ListaRestaurantes restaurantes={dados} />
    <Footer />
  </>
)
export default Home
