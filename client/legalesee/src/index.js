/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { StatusBar } from 'react-native'
import Routes from './routes'

/* INITIALIZE STATUS BAR */
StatusBar.setBarStyle( 'light-content', true )
// StatusBar.setBackgroundColor( lightGreen ) // android specific

class Legalesee extends React.Component {
  render() {
    return (
      <Routes/>
    )
  }
}

export default Legalesee
