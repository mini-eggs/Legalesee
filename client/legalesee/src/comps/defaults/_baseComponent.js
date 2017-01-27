/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { Keyboard } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'

class BaseComponent extends React.Component {

  state: Object

  constructor(props: Object) {
    super(props)
  }

  componentWillMount () {
    Actions.fn.closeDrawer()
  }

  componentWillUnmount () {
    Keyboard.dismiss() 
  }

}

export default BaseComponent
