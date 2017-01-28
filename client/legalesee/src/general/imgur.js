/**
 * @flow
 */

import { imgurKey } from '../keys/keys'

const url = 'https://api.imgur.com/3/upload'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Client-ID ' + imgurKey
}

const uploadPhotoToImgur = (props: Object) => {
  return new Promise( (resolve,reject) => {
    const post = {
      method: 'POST',
      headers: headers,
      body:JSON.stringify({ image: props.image })
    }
    fetch(url,post)
      .then( res => res.json())
      .then( img => resolve(img.data.link.replace('http://', 'https://')))
      .catch( err => reject(err))
  })
}

export default uploadPhotoToImgur