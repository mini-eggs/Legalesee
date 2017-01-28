/**
 * @flow
 */

// $FlowFixMe
import ImagePicker from 'react-native-image-picker'

const LowQuality = {
  mediaType:'photo',
  quality:0.1,
  maxWidth:200,
  maxHeight:200
}

const HighQuality = {
  mediaType:'photo',
  quality:1,
  maxWidth:1000,
  maxHeight:1000
}

const imagePicker = async props => {
  return new Promise( async (resolve, reject) => {
    ImagePicker.showImagePicker(HighQuality, resolve)
  })
}

const getPhoto =  () => {
  return new Promise( async (resolve, reject) => {
    const imageData = await imagePicker()
    if(imageData.didCancel || imageData.error || imageData.customButton) {
      reject()
    }
    else {
      resolve( imageData.data )
    }
  })
}

export default getPhoto
