import fetch from 'node-fetch'
import { } from 'date-fns'
import { HeightInfoDTO } from 'symbol-openapi-typescript-fetch-client'
import Layout from '../../components/Layout'
import {
  MainContainer,
} from '../../styled'

const {
  GATEWAY_URL
} = process.env

const fetcher = () => fetch(GATEWAY_URL + '/chain/height' || '')
  .then(resp => resp.json() as Promise<HeightInfoDTO>)

interface IProps {
  timestamp: number
  height: number
}

export default function Height({
  timestamp,
  height
}: IProps) {
  return (
  <Layout title="Chain Height | Symbol Diag">
    <MainContainer>
      <h1>Current Height</h1>
      <p>{timestamp}</p>
      <p>{height}</p>
    </MainContainer>
  </Layout>
  )
}

export const getServerSideProps = async () => {
  const resp = await fetcher()
  return { props: {
    timestamp: Date.now(),
    height: resp.height
  } }
}
