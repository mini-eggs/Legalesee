/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import { Button, Spacer, defaultScene as discoverScene, BaseComponent } from '../defaults/defaults'
import { getPhoto, errorHandler } from '../../general/general'
export { discoverScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25
  }
}

class Discover extends BaseComponent {

  async ImageInput () {
    try {
      const imageData = await getPhoto()
      Actions.ImageInput({ imageData: imageData })
    }
    catch( err ) {
      errorHandler( err )
    }
  }

  render () {
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
          onPress={ e => this.ImageInput() }
          title='Upload Photo'
        />
        <Spacer/>
        <Spacer/>
        <Button
          onPress={ e => alert('Enter URL') }
          title='Enter URL'
        />
        <Spacer/>
        <Spacer/>
        <Button
          onPress={ e => alert('Tutorial') }
          title='Tutorial'
        />
      </View>
    )
  }
}

export default Discover
