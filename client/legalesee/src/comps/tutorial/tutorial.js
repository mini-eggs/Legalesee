/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, TextInput, Alert, Text, Dimensions } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
// $FlowFixMe
import Swiper from 'react-native-swiper'
import Theme from '../../styles/theme'
// $FlowFixMe
import Sizes from '../../styles/device'
import { Button, Spacer, backScene, BaseComponent } from '../defaults/defaults'

const tutorialScene = {
  ...backScene,
  navigationBarStyle: {
    ...backScene.navigationBarStyle,
    backgroundColor: 'transparent'
  }
}
export { tutorialScene }

const style = {
  container: {
    marginTop: -1 * Sizes.navigationBarHeight
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
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
        <Swiper 
          style={style.wrapper} 
          showsButtons={false}
          height={Dimensions.get('window').height}
          dotColor={'#ffffff'}
          activeDotColor={Theme.primaryColor}
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
