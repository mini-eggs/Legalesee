/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View } from 'react-native'
// $FlowFixMe
import { List, ListItem } from 'react-native-elements'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import { Button, Spacer, defaultScene as discoverScene, BaseComponent } from '../defaults/defaults'
import { getPhoto, errorHandler } from '../../general/general'
export { discoverScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  List: {
  },
  ListItem: {
  }
}

class Discover extends BaseComponent {

  async ImageInput () {
    try {
      Actions.ImageInput({ imageData: await getPhoto() })
    }
    catch( err ) {
      errorHandler( err )
    }
  }

  render () {

    const primaryList = [
      {
        title: 'Copy & Paste',
        icon: 'content-paste',
        onPress: () => Actions.PasteInput()
      },
      {
        title: 'Upload Photo',
        icon: 'photo-camera',
        onPress: () => this.ImageInput()
      },
      {
        title: 'Enter URL',
        icon: 'computer',
        onPress: () => Actions.UrlInput()
      }
    ]

    const secondaryList = [
      {
        title: 'Tutorial',
        icon: 'help',
        onPress: () =>  Actions.Tutorial()
      }
    ]

    return (
      <View style={style.container}>
        <List containerStyle={style.List} >
          {
            primaryList.map( (item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                containerStyle={style.ListItem}
                onPress={item.onPress}
              />
            ))
          }
        </List>
        <List containerStyle={style.List} >
          {
            secondaryList.map( (item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                containerStyle={style.ListItem}
                onPress={item.onPress}
              />
            ))
          }
        </List>
      </View>
    )
  }
}

export default Discover
