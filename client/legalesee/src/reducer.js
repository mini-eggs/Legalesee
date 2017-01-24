/**
 * @flow
 */

import React from 'react'
import { Reducer, Router } from 'react-native-router-flux'
// $FlowFixMe
import Sizes from './styles/device'

const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    console.log('ACTION:', action)
    return defaultReducer(state, action)
  }
}

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  }
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : Sizes.navigationBarHeight
    style.marginBottom = computedProps.hideTabBar ? 0 : Sizes.tabBarHeight
  }
  return style
}

const Routes = props => {
  return (
    <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
      { props.children }
    </Router>
  )
}

export default Routes
