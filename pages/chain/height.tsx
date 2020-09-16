import fetch from 'node-fetch'
import { } from 'date-fns'
import { HeightInfoDTO } from 'symbol-openapi-typescript-fetch-client'
import Layout from '../../components/Layout'
import {
  MainContainer,
  Headline
} from '../../styled'

const {
  GATEWAY_URL
} = process.env

const fetcher = () => fetch(GATEWAY_URL + '/chain/height' || '')
  .then(resp => resp.json() as Promise<HeightInfoDTO>)

const commarize = (value: string) => value.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

interface IProps {
  timestamp: number
  height: string
}

export default function Height({
  timestamp,
  height
}: IProps) {
  return (
  <Layout title="Chain Height | Symbol Diag">
    <MainContainer>
      <Headline>Chain Height</Headline>
      <p>{commarize(height)}</p>
      <p>{timestamp}</p>
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
