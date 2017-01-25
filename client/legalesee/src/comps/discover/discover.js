/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View } from 'react-native'
import { Button, Spacer } from '../defaults/defaults'

class Discover extends React.Component {
  render() {
    return (
      <View>
        <Spacer/>
        <Button
          onPress={ e => alert('do some sick shit1') }
          icon={{name: 'touch-app', type: 'material-icons'}}
          title='Copy & Paste Text'
        />
        <Spacer/>
        <Button
          onPress={ e => alert('do some sick shit2') }
          icon={{name: 'info', type: 'material-icons'}}
          title='Tutorial'
        />
      </View>
    )
  }
}

export default Discover
