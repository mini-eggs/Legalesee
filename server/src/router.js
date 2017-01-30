import http from 'http'
import express from 'express'
// import bodyParser from 'body-parser'
import imageToText from './business/image/image'

const app = express()
app.server = http.createServer(app)
// const jsonParser = bodyParser.json()

app.get('/image', (req, res) => {
  app.res = res
  if (!req.query) {
    error({ message: 'No data' })
  }
  else if (!req.query.image) {
    error({ message: 'No image', currentData: req.query })
  }
  else {
    const text = imageToText( req.query )
    text.then(complete)
    text.catch( err => { error({ err: err, message: 'Image to text failed' }) })
  }
})
 
app.all('*', (req, res) => {
  app.res = res
  error({ message: 'Page not found' })
})

const complete = props => {
  props.status = 1
  app.res.json(props)
}

const error = props => {
  if( typeof props === 'undefined') {
    props = { status: -1 }
  }
  else {
    props.status = -1
  }
  app.res.json(props)
}
 
app.server.listen( process.env.PORT || 8080 , () => {
  console.log(`Listening on http://localhost:${app.server.address().port}`)
})

// curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{ "image": "http://i.imgur.com/xFAwetf.jpg" }'  http://localhost:8080/image

// curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{ "image": "http://i.imgur.com/xFAwetf.jpg" }' https://legalesee.herokuapp.com/image
// curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"image":"https://i.imgur.com/H6dgCHI.jpg"}' https://legalesee.herokuapp.com/image
