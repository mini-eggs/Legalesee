/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Image } from 'react-native'
// $FlowFixMe
import Emoji from 'react-native-emoji'
// $FlowFixMe
import { Row, Col, Grid, Text } from 'react-native-elements'
// $FlowFixMe
import FadeIn from '@exponent/react-native-fade-in-image'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
// $FlowFixMe
import * as Progress from 'react-native-progress'
import { Button, Spacer, backScene as imageInputScene, BaseComponent, Loading } from '../defaults/defaults'
// $FlowFixMe
import Styles from '../../styles/styles'
import { errorHandler, uploadPhotoToImgur, api } from '../../general/general'
export { imageInputScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25
  }
}

const ImageComp = ( props: Object ) => {
  return (
    <FadeIn 
      style={{ flex: 1 }}
      placeholderStyle={{ backgroundColor: Styles.defaultSceneStyles.backgroundColor }}
    > 
      <Image 
        resizeMode="contain" 
        style={{ flex: 1 }} 
        source={{ uri: props.uri }} 
      />
    </FadeIn>
  )
}

class ImageInput extends BaseComponent {

  state: {
    imageData: string,
    imageUrl: string,
    imageText: string,
    status: string
  }

  setState: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      imageData: props.imageData,
      imageUrl: '',
      imageText: '',
      status: 'loadingImageUrl'
    }
  }

  componentDidMount () {
    this.photoHanlder()
  }

  async photoHanlder () {
    try {
      const imageUrl = await uploadPhotoToImgur({ image: this.state.imageData })
      this.setState({ status: 'recevedImage', imageUrl: imageUrl })
      const response = await fetch( `${api}image/?image=${imageUrl}` )
      const imageText = ( await response.json() ).text
      this.setState({ status: 'receivedText', imageText: imageText })
    }
    catch( err ) {
      errorHandler( err )
    }
  }

  renderData () {
    let data
    switch(this.state.status) {
      case "receivedText": {
        data = () => <Text> { this.state.imageText } </Text>
        break;
      }
      case "recevedImage": {
        data = () => <ImageComp uri={ this.state.imageUrl } />
        break;
      }
      default: {
        data = () => <Loading />
        break;
      }
    }
    return data()
  }

  renderData () {
    let data
    switch(this.state.status) {
      case "receivedText": {
        data = () => <Text> { this.state.imageText } </Text>
        break;
      }
      default: {
        data = () => this.renderLoading()
        break;
      }
    }
    return data()
  }

  renderLoading () {
    return (
      <View style={[style.container, { padding: 0 }]}>
        <Text h4 style={{ textAlign: 'center' }}>
          This can take some time
        </Text>
        <Text h4 style={{ textAlign: 'center' }}>
          please stay patient <Emoji name="relaxed"/>
        </Text>
        <Spacer/>
        <Spacer/>
        <Loading />
        <Spacer/>
        <Spacer/>
        {
          this.state.imageUrl.length > 0 ? <ImageComp uri={ this.state.imageUrl } /> : <View/>
        }
      </View>
    )
  }

  render () {
    return (
      <View style={style.container} >
        {
          this.renderData()
        }
      </View>
    )
  }
}

export default ImageInput
