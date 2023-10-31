import HomeTypes from './Home.types'
import S from './Home.styles'
import Logo from '../../components/Logo'
import Twitter from '../../components/Twitter'
import Instagram from '../../components/Instagram'
import Telegram from '../../components/Telegram'

const Home = (props: HomeTypes) => (
  <S.Home {...props}>
    <Logo medium />

    <S.SocialMedias>
      <Telegram />
      <Instagram />
      <Twitter />
    </S.SocialMedias>
  </S.Home>
)

export default Home