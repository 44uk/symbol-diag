import Link from 'next/link'
import useSWR from 'swr'
import Layout from '../components/Layout'

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
    <h1>Hello Next.js 👋</h1>
    <ul>
      <li>{ data.USD } USD</li>
      <li>{ data.JPY } JPY</li>
      <li>{ data.EUR } EUR</li>
    </ul>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
  )
}

export default Index
