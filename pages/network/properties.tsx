import fetch from 'node-fetch'
import { NetworkConfigurationDTO } from 'symbol-openapi-typescript-fetch-client'
import { map } from 'lodash'
import Layout from '../../components/Layout'
import {
  MainContainer,
  PropTable,
  PropLabel,
  PropValue,
} from '../../styled'

const {
  GATEWAY_URL
} = process.env

const fetcher = () => fetch(GATEWAY_URL + '/network/properties')
  .then(resp => resp.json() as Promise<NetworkConfigurationDTO>)

interface IProps extends NetworkConfigurationDTO{
  timestamp: number
}

export default function Rental(props: IProps) {
  const {
    network,
    chain,
    plugins
  } = props

  return (
  <Layout title="Network Configuration | Symbol Diag">
    <MainContainer>
      <h1>Network Configuration</h1>

      <h2>Network</h2>
      <div>
      <PropTable>
        { Object.keys(network).map(prop => <>
          <PropLabel>{ prop }</PropLabel>
          <PropValue>{ (network as any)[prop] }</PropValue>
        </>) }
      </PropTable>
      </div>

      <h2>Chain</h2>
      <div>
      <PropTable>
        { Object.keys(chain).map(prop => <>
          <PropLabel>{ prop }</PropLabel>
          <PropValue>{ (chain as any)[prop] }</PropValue>
        </>) }
      </PropTable>
      </div>

      <h2>Plugins</h2>
      <PropTable>
      </PropTable>
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
