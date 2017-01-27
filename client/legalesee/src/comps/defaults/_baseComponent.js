/**
 * @flow
 */

import React from 'react'
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

}

export default BaseComponent
