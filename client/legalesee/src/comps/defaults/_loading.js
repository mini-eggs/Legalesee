/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import * as Progress from 'react-native-progress'
import Theme from '../../styles/theme'

const LoadingComp = () => {
  return (
    <Progress.CircleSnail
      style={{ alignItems: 'center' }}
      color={Theme.primaryColor}
    />
  )
}

export default LoadingComp
