import styled from 'styled-components'
import instagram from '../../assets/instagram.svg'

const Logo = styled.img.attrs({ src: instagram, alt: 'Instagram logo' })`
  width: 60%;
`

const Instagram = styled.a`
  display: flex;
  width: 8rem;
  height: 8rem;
  background-color: var(--color-second);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const S = {
  Instagram,
  Logo
}

export default S