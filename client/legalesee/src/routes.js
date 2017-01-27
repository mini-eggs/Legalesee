/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { Text } from 'react-native'
// $FlowFixMe
import { Icon } from 'react-native-elements'
// $FlowFixMe
import { Scene, Modal, ActionConst, Actions } from 'react-native-router-flux'

import LaunchComp from './components.examples/Launch'
import DiscoverComp from './comps/discover/discover'
import DrawerComp from './comps/drawer/drawer'

// $FlowFixMe
import Style from './styles/styles'
// $FlowFixMe
import Sizes from './styles/device'
import ReducerRouterLayer from './reducer'

const defaultScene = {
  navigationBarStyle: Style.navigationBarStyle,
  titleStyle: Style.titleStyle,
  type: ActionConst.REPLACE,
  renderLeftButton: () => {
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
}

const Routes = () => {
  return (
    <ReducerRouterLayer>
      <Scene key="drawer" component={DrawerComp} open={false} >
        <Scene key='root' hideTabBar>
          <Scene key='Discover' title='Discover' component={DiscoverComp} {...defaultScene} />
          <Scene key='launch' title='Launch' component={LaunchComp} initial />
        </Scene>
      </Scene>
    </ReducerRouterLayer>
  )
}

export default Routes
