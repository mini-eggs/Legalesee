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

const backIcon = () => {
  return (
    <Icon 
      size={28}
      iconStyle={Style.navIconStyle}
      name='arrow-back' 
      type='material-icons'
      color='#fff' 
      underlayColor='transparent'
      onPress={ () => Actions.Discover({ type: ActionConst.RESET }) }
    />
  )
}

const backScene = {
  navigationBarStyle: Style.navigationBarStyle,
  titleStyle: Style.titleStyle,
  type: ActionConst.PUSH,
  renderBackButton: backIcon
}

export default backScene
