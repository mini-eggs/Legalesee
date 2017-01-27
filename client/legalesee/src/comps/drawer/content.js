/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Text } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import { Button, Spacer } from '../defaults/defaults'
import Theme from '../../styles/theme'

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 25,
    backgroundColor: Theme.backgroundColor
  },
  text: {
    color: '#fff'
  }
}

class Discover extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>
          Placeholder
        </Text>
        <Spacer/>
        <Button
          onPress={ e => Actions.PasteInput() }
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
