import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const path = "/network"
  const resp = await fetch(`http://api-01.ap-northeast-1.096x.symboldev.network:3000${path}`)
  const json = await resp.json()

  try {
    res.status(200).json(json)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
