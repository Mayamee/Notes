const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.resolve(__dirname, 'data', 'db.json'))
const middlewares = jsonServer.defaults()
const cors = require('cors')

const SHEMA = process.env.SHEMA || 'http'
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || '5050'

const API_PORT = process.env.API_PORT || 8888

server.use(
  cors({
    origin: `${SHEMA}://${HOST}:${PORT}`,
  })
)

server.use(middlewares)
server.use(router)
server.listen(API_PORT, () => {
  console.log('JSON Server is up on ' + API_PORT)
})
