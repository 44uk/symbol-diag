import fetch from 'node-fetch'
import { TransactionFeesDTO } from 'symbol-openapi-typescript-fetch-client'
import Layout from '../../components/Layout'
import {
  MainContainer,
} from '../../styled'

const {
  GATEWAY_URL
} = process.env

const fetcher = () => fetch(GATEWAY_URL + '/network/fees/transaction')
  .then(resp => resp.json() as Promise<TransactionFeesDTO>)

interface IProps extends TransactionFeesDTO {
  timestamp: number
}

export default function Transaction({
  averageFeeMultiplier,
  medianFeeMultiplier,
  highestFeeMultiplier,
  lowestFeeMultiplier
}: IProps) {
  return (
  <Layout title="Transaction Fee | Symbol Diag">
    <MainContainer>
      <h1>Fee</h1>
      <ul>
        <li>ave : {averageFeeMultiplier}</li>
        <li>med : {medianFeeMultiplier}</li>
        <li>high: {highestFeeMultiplier}</li>
        <li>low : {lowestFeeMultiplier}</li>
      </ul>
    </MainContainer>
  </Layout>
  )
}

export const getServerSideProps = async () => {
  const resp = await fetcher()
  return { props: {
    timestamp: Date.now(),
    ...resp
  } }
}
