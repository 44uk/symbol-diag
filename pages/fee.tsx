import Layout from '../components/Layout'

interface IProps {
  averageFeeMultiplier: number
  medianFeeMultiplier: number
  highestFeeMultiplier: number
  lowestFeeMultiplier: number
}

function Fee({
  averageFeeMultiplier,
  medianFeeMultiplier,
  highestFeeMultiplier,
  lowestFeeMultiplier
}: IProps) {
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

Fee.getInitialProps = async () => {
  const path = "/network/fees/transaction"
  const res = await fetch(`http://api-01.ap-northeast-1.096x.symboldev.network:3000${path}`)
  const json = await res.json()
  return { ...json }
}

export default Fee
