import fetch from 'node-fetch'
import Layout from '../../components/Layout'
import { TransactionFeesDTO } from 'symbol-openapi-typescript-fetch-client'

const {
  GATEWAY_URL
} = process.env

export default function Transaction({
  averageFeeMultiplier,
  medianFeeMultiplier,
  highestFeeMultiplier,
  lowestFeeMultiplier
}: TransactionFeesDTO) {
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Fee</h1>
    <ul>
      <li>{averageFeeMultiplier}</li>
      <li>{medianFeeMultiplier}</li>
      <li>{highestFeeMultiplier}</li>
      <li>{lowestFeeMultiplier}</li>
    </ul>
  </Layout>
}

export const getServerSideProps = async () => {
  const path = "/network/fees/transaction"
  const res = await fetch(`${GATEWAY_URL}${path}`)
  const json = await res.json() as TransactionFeesDTO
  return { props: { ...json } }
}
