import Layout from '../components/Layout'

function Stars({ stars }: { stars: number }) {
  return <Layout title="Home | Next.js + TypeScript Example">
    <div>Next stars: {stars}</div>
  </Layout>
}

// 先に実行される
Stars.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Stars
