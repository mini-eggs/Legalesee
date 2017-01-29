import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import imageToText from './business/image/image'

const app = express()
app.server = http.createServer(app)
const jsonParser = bodyParser.json()

const error = () => res.send({ status: -1 })
 
app.get('/', (req, res) => {
  res.send('Silence is bliss')
})

app.post('/image', jsonParser, (req, res) => {
  if (!req.body) {
    error()
  }
  else {
    const text = imageToText( req.body )
    text.then( data => { res.send( data ) })
    text.catch( err => { error() })
  }
})
 
app.server.listen( process.env.PORT || 8080 )
console.log(`Listening on http://localhost:${app.server.address().port}`)

// curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{ "image": "http://i.imgur.com/xFAwetf.jpg" }'  http://localhost:8080/image
