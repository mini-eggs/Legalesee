/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { Button as RNEButton } from 'react-native-elements'
// $FlowFixMe
import { ActionConst, Actions } from 'react-native-router-flux'
import Theme from '../../styles/theme'

const Button = (props: Object) => {
  return (
    <RNEButton 
      onPress={ e => alert('onPress') } 
      {...Theme.button}
      {...props}
    />
  )  
}

export default Button