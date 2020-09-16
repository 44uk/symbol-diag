import Link from 'next/link'
import Layout from '../components/Layout'
import {
  MainContainer,
} from '../styled'

const About = () => (
  <Layout title="About | Symbol Diag">
    <MainContainer>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </MainContainer>
  </Layout>
)

export default About
