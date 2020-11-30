import express from 'express'

import { getMyChristmasList } from './src/routes/getMyChristmasList'
import { postNewWish } from './src/routes/postNewWish'
import { handle404 } from './src/routes/handle404'
import { handleError } from './src/routes/handleError'

const app = express()
const PORT = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(handleError)

app.get('/christmasLists/:token', getMyChristmasList)
app.post('/christmasLists/:token', postNewWish)
app.get('*', handle404)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
