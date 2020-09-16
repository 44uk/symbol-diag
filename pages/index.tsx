import useSWR from 'swr'
import Layout from '../components/Layout'
import {
  MainContainer,
} from '../styled'

interface IPrice {
  USD: number
  JPY: number
  EUR: number
}

const {
  NEXT_PUBLIC_PRICING_URL
} = process.env

const fetcher = () => fetch(NEXT_PUBLIC_PRICING_URL || "").then(resp => resp.json() as Promise<IPrice>)

const Index = () => {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
  <Layout title="Symbol Diag">
    <MainContainer>
      <h1>1 XYM =</h1>
      <ul>
        <li>{ data.USD } USD</li>
        <li>{ data.JPY } JPY</li>
        <li>{ data.EUR } EUR</li>
      </ul>
    </MainContainer>
  </Layout>
  )
}

export default Index
