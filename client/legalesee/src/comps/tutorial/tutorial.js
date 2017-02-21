/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, TextInput, Alert, Text, Dimensions, Image } from 'react-native'
// $FlowFixMe
import FadeIn from '@exponent/react-native-fade-in-image'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
// $FlowFixMe
import Swiper from 'react-native-swiper'
import Theme from '../../styles/theme'
// $FlowFixMe
import Sizes from '../../styles/device'
import { HexToRGBA } from '../../general/general'
import { Button, Spacer, backScene, BaseComponent } from '../defaults/defaults'

const tutorialScene = {
  ...backScene,
  navigationBarStyle: {
    ...backScene.navigationBarStyle,
    backgroundColor: 'transparent'
  }
}
export { tutorialScene }

const backgroundImage = 'https://i.imgur.com/9H7ZueZ.jpg'

const { height } = Dimensions.get('window')

const style = {
  fadeInContainer: {
    height: height,
    marginBottom: -1 * height
  },
  fadeIn: {
    backgroundColor: Theme.primaryColor
  },
  container: {
    marginTop: -1 * Sizes.navigationBarHeight
  },
  wrapper: {
    backgroundColor: HexToRGBA( Theme.primaryColor, 0.5)
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

class PasteInput extends BaseComponent {

  state: { }

  setState: Function

  constructor (props: Object) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <View style={style.container}>
        <FadeIn 
          style={style.fadeInContainer}
          placeholderStyle={style.fadeIn}
        > 
          <Image 
            resizeMode="cover" 
            style={{ flex: 1 }} 
            source={{ uri: backgroundImage }}
          >
          </Image>
        </FadeIn>
        <Swiper 
          style={style.wrapper} 
          showsButtons={false}
          height={Dimensions.get('window').height}
          dotColor={'#a8a8a8'}
          activeDotColor={'#ffffff'}
        >
          <View style={style.slide1}>
            <Text style={style.text}>Hello Swiper</Text>
          </View>
          <View style={style.slide2}>
            <Text style={style.text}>Beautiful</Text>
          </View>
          <View style={style.slide3}>
            <Text style={style.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

export default PasteInput
