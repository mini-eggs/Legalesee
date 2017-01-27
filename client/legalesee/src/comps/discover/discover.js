/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View } from 'react-native'
import { Button, Spacer } from '../defaults/defaults'

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 25
  }
}

class Discover extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Button
          onPress={ e => alert('Copy & Paste') }
          // icon={{name: 'touch-app', type: 'material-icons'}}
          title='Copy & Paste'
        />
        <Spacer/>
        <Button
          onPress={ e => alert('Upload Photo') }
          // icon={{name: 'info', type: 'material-icons'}}
          title='Upload Photo'
        />
        <Spacer/>
        <Button
          onPress={ e => alert('Tutorial') }
          // icon={{name: 'info', type: 'material-icons'}}
          title='Tutorial'
        />
      </View>
    )
  }
}

export default Discover
