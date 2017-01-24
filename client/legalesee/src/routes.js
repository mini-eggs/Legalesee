/**
 * @flow
 */

import React from 'react'
import { Scene, Modal, ActionConst } from 'react-native-router-flux'

import LaunchComp from './components.examples/Launch'
import DiscoverComp from './comps/discover/discover'

// $FlowFixMe
import Style from './styles/styles'
// $FlowFixMe
import Sizes from './styles/device'
import ReducerRouterLayer from './reducer'

const defaultScene = {
  navigationBarStyle: Style.navigationBarStyle,
  titleStyle: Style.titleStyle,
  type: ActionConst.REPLACE
}

const Routes = () => {
  return (
    <ReducerRouterLayer>
      <Scene key='modal' component={Modal}>
        <Scene key='root' hideTabBar>
          <Scene key='Discover' title='Discover' component={DiscoverComp} {...defaultScene} />
          <Scene key='launch' title='Launch' component={LaunchComp} initial />
        </Scene>
      </Scene>
    </ReducerRouterLayer>
  )
}

export default Routes
