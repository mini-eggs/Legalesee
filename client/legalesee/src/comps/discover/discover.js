/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import { Button, Spacer, defaultScene as discoverScene, BaseComponent } from '../defaults/defaults'
export { discoverScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 25
  }
}

class Discover extends BaseComponent {
  render() {
    return (
      <View style={style.container}>
        <Button
          onPress={ e => Actions.PasteInput() }
          // icon={{name: 'touch-app', type: 'material-icons'}}
          title='Copy & Paste'
        />
        <Spacer/>
        <Spacer/>
        <Button
          onPress={ e => alert('Upload Photo') }
          // icon={{name: 'info', type: 'material-icons'}}
          title='Upload Photo'
        />
        <Spacer/>
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
