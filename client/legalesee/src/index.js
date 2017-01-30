/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { StatusBar } from 'react-native'
// $FlowFixMe
import codePush from 'react-native-code-push'
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

/* INITIALIZE CODE PUSH */
const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME}

class Legalesee extends React.Component {

  componentDidMount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  render() {
    return (
      <Routes/>
    )
  }
}

export default codePush(codePushOptions)(Legalesee)
