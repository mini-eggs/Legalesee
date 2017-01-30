import Tesseract from 'tesseract.js'
import request from 'request'

export default props => {
  return new Promise( (resolve, reject) => {
    if( !props.image ) reject('no image')
    request({ url: props.image, encoding: null }, (err, response, buffer) => {
      if( err ) reject('image not found on request')
      const tess = Tesseract.recognize( new Buffer( buffer ) ) // lol functional programming
      // tess.progress( progress   => { 
      //   if( typeof progress.progress  == 'undefined') {
      //     props.res.send( progress.progress )
      //   }
      // })
      tess.then( result => {
        resolve({ text: result.text })
      }) 
      tess.catch( err => {
        reject(err)
      })
    })
  })
}
