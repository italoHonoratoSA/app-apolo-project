import logo from '../../assets/logo.png'
import S from './Logo.styles'
import LogoType from './Logo.types'

const Logo = ({ medium }: LogoType) => (
  <S.Logo medium={medium} src={logo} alt="Project Apolo logo" />
)

export default Logo