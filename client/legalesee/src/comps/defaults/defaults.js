/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Text } from 'react-native'
// $FlowFixMe
import { Button as RNEButton } from 'react-native-elements'
import Theme from '../../styles/theme'

const Button = (props: Object) => {
  return (
    <RNEButton 
      onPress={ e => alert('onPress') } 
      backgroundColor={Theme.secondaryColor} 
      {...Theme.button}
      {...props}
    />
  )
}

export { Button }

const Spacer = (props: Object) => {
  return (
    <View 
      style={Theme.spacer}
      {...props}
    />
  )
}

export { Spacer }
