import fetch from 'node-fetch'
import Layout from '../../components/Layout'
import { NetworkPropertiesDTO } from 'symbol-openapi-typescript-fetch-client'

const {
  GATEWAY_URL
} = process.env

export default function Rental({
  epochAdjustment,
  generationHashSeed,
  identifier,
  nemesisSignerPublicKey,
  nodeEqualityStrategy
}: NetworkPropertiesDTO) {
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Fee</h1>
    <ul>
      <li>{epochAdjustment}</li>
      <li>{generationHashSeed}</li>
      <li>{identifier}</li>
      <li>{nemesisSignerPublicKey}</li>
      <li>{nodeEqualityStrategy}</li>
    </ul>
  </Layout>
}

export const getServerSideProps = async () => {
  const path = "/network/properties"
  const resp = await fetch(`${GATEWAY_URL}${path}`)
  const json = await resp.json() as NetworkPropertiesDTO
  return { props: { ...json } }
}
