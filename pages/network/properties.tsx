import fetch from 'node-fetch'
import { NetworkPropertiesDTO } from 'symbol-openapi-typescript-fetch-client'
import Layout from '../../components/Layout'
import {
  MainContainer,
} from '../../styled'

const {
  GATEWAY_URL
} = process.env

const fetcher = () => fetch(GATEWAY_URL + '/network/properties')
  .then(resp => resp.json() as Promise<NetworkPropertiesDTO>)

interface IProps extends NetworkPropertiesDTO {
  timestamp: number
}

export default function Rental({
  epochAdjustment,
  generationHashSeed,
  identifier,
  nemesisSignerPublicKey,
  nodeEqualityStrategy
}: IProps) {
  return (
  <Layout title="Network Properties | Symbol Diag">
    <MainContainer>
      <h1>Fee</h1>
      <ul>
        <li>{epochAdjustment}</li>
        <li>{generationHashSeed}</li>
        <li>{identifier}</li>
        <li>{nemesisSignerPublicKey}</li>
        <li>{nodeEqualityStrategy}</li>
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
