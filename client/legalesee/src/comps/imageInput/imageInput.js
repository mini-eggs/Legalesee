/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Image, ScrollView } from 'react-native'
// $FlowFixMe
import Emoji from 'react-native-emoji'
// $FlowFixMe
import io from 'socket.io-client'
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
import Theme from '../../styles/theme'
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
    status: string,
    progress: number
  }

  setState: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      imageData: props.imageData,
      imageUrl: '',
      imageText: '',
      status: 'loadingImageUrl',
      progress: 0
    }
  }

  componentDidMount () {
    this.photoHandler()
  }

  async photoHandler () {
    try {
      const imageUrl = await uploadPhotoToImgur({ image: this.state.imageData })
      this.setState({ status: 'recevedImage', imageUrl: imageUrl }, () => { this.imageEvents() })
    }
    catch( err ) {
      errorHandler( err )
    }
  }

  imageEvents () {
    const socket = io( api, { transports: ['websocket'] } )
    socket.on('imageProgress', data => {
      this.setState({ progress: data.progress })
    })
    socket.on('imageComplete', text => {
      // this.setState({ status: 'receivedText', imageText: text })
      Actions.ReadInput({ inputText: text })
    })
    socket.emit('readImage', { image: this.state.imageUrl })
  }

  // renderData () {
  //   let data
  //   switch(this.state.status) {
  //     case "receivedText": {
  //       data = () => this.renderText()
  //       break;
  //     }
  //     default: {
  //       data = () => this.renderLoading()
  //       break;
  //     }
  //   }
  //   return data()
  // }

  // renderText () {
  //   return (
  //     <ScrollView
  //       keyboardDismissMode={'on-drag'}
  //       style={{ flex: 1 }}
  //       keyboardShouldPersistTaps={false}
  //       scrollEnabled={true}
  //       horizontal={false}
  //       showsVerticalScrollIndicator={false}
  //     >
  //       <Text> 
  //         { this.state.imageText } 
  //       </Text>
  //     </ScrollView>
  //   )
  // }

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
        {
          this.state.progress > 0 ?
            <View style={{ alignItems: 'center' }}>
               <Progress.Circle 
                  progress={this.state.progress} 
                  borderWidth={0}
                  color={Theme.primaryColor}
                />
            </View>
            :
            <Loading />
        }
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
          this.renderLoading()
        }
      </View>
    )
  }
}

export default ImageInput
