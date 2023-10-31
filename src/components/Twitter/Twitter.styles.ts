import styled from 'styled-components'
import twitter from '../../assets/x.png'

const Logo = styled.img.attrs({ src: twitter, alt: 'Twitter logos' })`
  width: 60%;
`

const Twitter = styled.a`
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
    transform: scale(1.2);
  }
`

const S = {
  Twitter,
  Logo
}

export default S