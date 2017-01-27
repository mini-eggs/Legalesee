/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View } from 'react-native'
import Theme from '../../styles/theme'

const Spacer = (props: Object) => {
  return (
    <View 
      style={Theme.spacer}
      {...props}
    />
  )
}

export default Spacer
