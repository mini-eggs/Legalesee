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
import Theme from '../../styles/theme'
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
  },
  titleStyle: {
    fontSize: Theme.fontSize
  } ,
  listIcon: {
    justifyContent: 'center', // ?? check later
    alignItems: 'center'
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
                leftIcon={{ name: item.icon, style: style.listIcon }}
                rightIcon={{ name: 'chevron-right', style: style.listIcon }}
                containerStyle={style.ListItem}
                onPress={item.onPress}
                titleStyle={style.titleStyle}
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
                leftIcon={{ name: item.icon, style: style.listIcon }}
                rightIcon={{ name: 'chevron-right', style: style.listIcon }}
                containerStyle={style.ListItem}
                onPress={item.onPress}
                titleStyle={style.titleStyle}
              />
            ))
          }
        </List>
      </View>
    )
  }
}

export default Discover
