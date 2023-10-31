import HomeTypes from './Home.types'
import S from './Home.styles'
import Logo from '../../components/Logo'
import Twitter from '../../components/Twitter'
import Instagram from '../../components/Instagram'

const Home = (props: HomeTypes) => (
  <S.Home {...props}>
    <Logo medium />

    <S.SocialMedias>
      <Twitter />
      <Instagram />
    </S.SocialMedias>
  </S.Home>
)

export default Home