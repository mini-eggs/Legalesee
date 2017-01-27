/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Text } from 'react-native'
// $FlowFixMe
import { Button as RNEButton, Icon } from 'react-native-elements'
// $FlowFixMe
import { ActionConst, Actions } from 'react-native-router-flux'
// $FlowFixMe
import Style from '../../styles/styles'
import Theme from '../../styles/theme'

const Button = (props: Object) => {
  return (
    <RNEButton 
      onPress={ e => alert('onPress') } 
      {...Theme.button}
      {...props}
    />
  )  
}

export { Button }

const Spacer = (props: Object) => {
  return (
    <View 
      style={Theme.spacer}
      {...props}
    />
  )
}

export { Spacer }

const leftIcon = () => {
  return (
    <Icon 
      size={28}
      name='menu' 
      type='material-icons'
      color='#fff' 
      underlayColor='transparent'
      onPress={ () => Actions.refresh({key: 'drawer', open: value => !value }) }
    />
  )
}

const defaultScene = {
  navigationBarStyle: Style.navigationBarStyle,
  titleStyle: Style.titleStyle,
  type: ActionConst.REPLACE,
  renderLeftButton: leftIcon
}

export { defaultScene }

const backIcon = () => {
  return (
    <Icon 
      size={28}
      name='arrow-back' 
      type='material-icons'
      color='#fff' 
      underlayColor='transparent'
      onPress={ () => Actions.pop() }
    />
  )
}

const backScene = {
  navigationBarStyle: Style.navigationBarStyle,
  titleStyle: Style.titleStyle,
  type: ActionConst.PUSH,
  renderBackButton: backIcon
}

export { backScene }

class BaseComponent extends React.Component {

  state: Object

  constructor(props: Object) {
    super(props)
  }

  componentWillMount () {
    Actions.fn.closeDrawer()
  }

}

export { BaseComponent }
