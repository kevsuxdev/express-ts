import express from 'express'
import dotenv from 'dotenv'
import { prisma } from './lib/prisma.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (_req, res) => res.send('Entry point!'))

app.listen(PORT, async () => {
  try {
    await prisma.$connect()
    console.log('✅ Prisma connected successfully!')
    console.log(`You are listening on http://localhost:${PORT}`)
  } catch (error) {
    console.error('❌ Prisma connection failed:', error)
    process.exit(1)
  }
})
