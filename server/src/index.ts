import express from 'express'
import cors from 'cors'
import { router } from './routes/listings'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
