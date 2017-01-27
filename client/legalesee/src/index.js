/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { StatusBar } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import Routes from './routes'

/* INITIALIZE STATUS BAR */
StatusBar.setBarStyle( 'light-content', true )
// StatusBar.setBackgroundColor( lightGreen ) // android specific

/* INITIALIZE ACTION FUNCTIONS */
Actions.fn = {
  closeDrawer: () => { alert( 'init in ./comps/drawer/drawer' ) }
}

class Legalesee extends React.Component {
  render() {
    return (
      <Routes/>
    )
  }
}

export default Legalesee
