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
import DiscoverComp, { discoverScene } from './comps/discover/discover'
import PasteInputComp, { pasteInputScene } from './comps/pasteInput/pasteInput'
import DrawerComp from './comps/drawer/drawer'

// $FlowFixMe
import Style from './styles/styles'
// $FlowFixMe
import Sizes from './styles/device'
import ReducerRouterLayer from './reducer'

const Routes = () => {
  return (
    <ReducerRouterLayer>
      <Scene key="drawer" component={DrawerComp} open={false} >
        <Scene key='root' hideTabBar>
          <Scene key='Discover' title='Discover' component={DiscoverComp} {...discoverScene} initial />
          <Scene key='PasteInput' title='Copy & Paste' component={PasteInputComp} {...pasteInputScene} />
          <Scene key='launch' title='Launch' component={LaunchComp} />
        </Scene>
      </Scene>
    </ReducerRouterLayer>
  )
}

export default Routes
