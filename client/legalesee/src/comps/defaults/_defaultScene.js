/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { Icon } from 'react-native-elements'
// $FlowFixMe
import { ActionConst, Actions } from 'react-native-router-flux'
// $FlowFixMe
import Style from '../../styles/styles'

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

export default defaultScene
