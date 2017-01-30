const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

import ImageSocketHandler from './business/image/image'

server.listen( process.env.PORT || 8080 )

app.all('*', function (req, res) {
  res.json({ message: 'page not found' })
})

io.on('connection', socket => {
  ImageSocketHandler( socket )
})
