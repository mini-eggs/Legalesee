import Tesseract from 'tesseract.js'
import request from 'request'

export default props => {
  return new Promise( (resolve, reject) => {
    if( !props.image ) reject()
    request({ url: props.image, encoding: null }, (err, response, buffer) => {
      if( err ) reject()
      const tess = Tesseract.recognize( new Buffer( buffer ) ) // lol functional programming
      tess.then( result => {
        resolve({ text: result.text })
      }) 
      tess.catch( err => {
        reject()
      })
    })
  })
}
