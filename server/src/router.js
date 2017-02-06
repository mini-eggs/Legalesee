const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const jsonParser = require('body-parser').json()

server.listen( process.env.PORT || 8080 )

// set up each applications
import Legalesee, { LegaleseeSockets } from './applications/legalesee/legalesee'
Legalesee(app, jsonParser)

// add each apps socket handler here
io.on('connection', socket => {
  LegaleseeSockets( socket )
})

// fallback
app.all('*', function (req, res) {
  res.json({ message: 'page not found' })
})
