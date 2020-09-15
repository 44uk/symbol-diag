import fetch from 'node-fetch'
import { RentalFeesDTO } from 'symbol-openapi-typescript-fetch-client'
import Layout from '../../components/Layout'
import {
  MainContainer,
} from '../../styled'

const {
  GATEWAY_URL
} = process.env

const fetcher = () => fetch(GATEWAY_URL + '/network/fees/rental' || '')
  .then(resp => resp.json() as Promise<RentalFeesDTO>)

interface IProps extends RentalFeesDTO {
  timestamp: number
  height: number
}

export default function Rental({
  effectiveRootNamespaceRentalFeePerBlock,
  effectiveChildNamespaceRentalFee,
  effectiveMosaicRentalFee
}: IProps) {
  return (
  <Layout title="Rental Fee | Symbol Diag">
    <MainContainer>
    <h1>Fee</h1>
    <ul>
      <li>{effectiveRootNamespaceRentalFeePerBlock}</li>
      <li>{effectiveChildNamespaceRentalFee}</li>
      <li>{effectiveMosaicRentalFee}</li>
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
