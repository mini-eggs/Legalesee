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
// $FlowFixMe
import Sizes from '../../styles/device'

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25,
    paddingTop: Sizes.navigationBarHeight,
    backgroundColor: Theme.backgroundColor
  },
  text: {
    color: '#fff'
  }
}

class Discover extends React.Component {
  render () {
    return (
      <View style={style.container}>
        <Text style={style.text}>
          Drawer menu
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
          onPress={ e => alert('Enter URL') }
          // icon={{name: 'info', type: 'material-icons'}}
          title='Enter URL'
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
