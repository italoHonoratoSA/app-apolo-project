import styled from 'styled-components'
import HomeTypes from './Home.types'

const SocialMedias = styled.section`
  display: flex;
  gap: 2rem;
`

const Home = styled.main<HomeTypes>`
  background-color: var(--color-fifth);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 2rem;
  flex-direction: column;
`

const S = {
  Home,
  SocialMedias
}

export default S