import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' })
    }

    // Here you can: send email, save to DB, etc.
    console.log("📨 New message:", { name, email, message })

    return res.status(200).json({ success: true, message: 'Message sent!' })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
