import { AlchemyAPI } from '../../../../keys/keys'

const watson = require('watson-developer-cloud')
const alchemy_language = watson.alchemy_language({ api_key: AlchemyAPI })

// example post
// curl -H "Content-Type: application/json" -X POST -d '{"text":"here is some terms of service", "type": "text"}' http://localhost:8080/legalesee/read

export default (req, res) => {

  const data = req.body

  if(!data) {
    res.json({ status: -1, message: 'no post data' })
  }
  else if(!data.text) {
    res.json({ status: -1, message: 'no post data "text" param' })
  }
  else if(!data.type) {
    res.json({ status: -1, message: 'no post data "type" param' })
  }
  else if( data.type !== 'text' && data.type !== 'html' && data.type !== 'url' ) {
    res.json({ status: -1, message: 'post data "type" param incorrect', content: data.type })
  }
  else {

    const props = {}
    props[ data.type ] = data.text

     alchemy_language.keywords(props, (err, response) => {
      if (err) {
        res.json({ status: -1, message: 'error', error: err })
      }
      else {
        res.json({ status: 1, message: 'success', response: response.keywords })
      }
    })
  }
}