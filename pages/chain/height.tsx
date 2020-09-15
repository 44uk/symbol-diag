import fetch from 'node-fetch'
import Layout from '../../components/Layout'
import { HeightInfoDTO } from 'symbol-openapi-typescript-fetch-client'

const {
  GATEWAY_URL
} = process.env

export default function Height({
  height
}: HeightInfoDTO) {
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Current Height</h1>
    <p>{height}</p>
  </Layout>
}

export const getServerSideProps = async () => {
  const path = "/chain/height"
  const res = await fetch(`${GATEWAY_URL}${path}`)
  const json = await res.json() as HeightInfoDTO
  return { props: { height: json.height } }
}
