import Layout from '../../components/Layout'

function Height({ height }: { height: string }) {
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Current Height</h1>
    <p>{height}</p>
  </Layout>
}

Height.getInitialProps = async () => {
  const path = "/chain/height"
  const res = await fetch(`http://api-01.ap-northeast-1.096x.symboldev.network:3000${path}`)
  const json = await res.json()
  return { height: json.height }
}

export default Height
