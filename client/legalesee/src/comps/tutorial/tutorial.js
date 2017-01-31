/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, TextInput, Alert, Text } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
// $FlowFixMe
import Swiper from 'react-native-swiper'
import Theme from '../../styles/theme'
import { Button, Spacer, backScene as tutorialScene, BaseComponent } from '../defaults/defaults'
export { tutorialScene }

var styles = {
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
      <Swiper style={styles.wrapper} showsButtons={false} height={200}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
}

export default PasteInput
