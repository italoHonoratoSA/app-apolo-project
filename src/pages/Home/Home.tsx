import HomeTypes from './Home.types'
import S from './Home.styles'
import Logo from '../../components/Logo'

const Home = (props: HomeTypes) => (
  <S.Home {...props}>
    <Logo medium />
  </S.Home>
)

export default Home