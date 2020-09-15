import fetch from 'node-fetch'
import Layout from '../../components/Layout'
import { RentalFeesDTO } from 'symbol-openapi-typescript-fetch-client'

const {
  GATEWAY_URL
} = process.env

export default function Rental({
  effectiveRootNamespaceRentalFeePerBlock,
  effectiveChildNamespaceRentalFee,
  effectiveMosaicRentalFee
}: RentalFeesDTO) {
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Fee</h1>
    <ul>
      <li>{effectiveRootNamespaceRentalFeePerBlock}</li>
      <li>{effectiveChildNamespaceRentalFee}</li>
      <li>{effectiveMosaicRentalFee}</li>
    </ul>
  </Layout>
}

export const getServerSideProps = async () => {
  const path = "/network/fees/rental"
  const res = await fetch(`${GATEWAY_URL}${path}`)
  const json = await res.json() as RentalFeesDTO
  return { props: { ...json } }
}
