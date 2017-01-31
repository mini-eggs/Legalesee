/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Image, ScrollView, Text } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import { Button, Spacer, backToHomeScene as readInputScene, BaseComponent, Loading } from '../defaults/defaults'
// $FlowFixMe
import Styles from '../../styles/styles'
import Theme from '../../styles/theme'
import { errorHandler, uploadPhotoToImgur, api } from '../../general/general'
export { readInputScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25
  }
}

class ReadInput extends BaseComponent {

  state: {
    inputText: string
  }

  setState: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      inputText: props.inputText
    }
  }

  componentDidMount () {
    console.log( this.state.inputText )
  }

  render () {
    return (
      <View style={style.container} >
        <Text>test</Text>
      </View>
    )
  }
}

export default ReadInput
