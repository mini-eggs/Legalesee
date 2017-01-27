/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { Text } from 'react-native'
// $FlowFixMe
import Drawer from 'react-native-drawer'
// $FlowFixMe
import { Actions, DefaultRenderer } from 'react-native-router-flux'
import Content from './content'

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

export default class extends React.Component {

  state: {
    key: number,
    open: boolean,
    children: Object,
    onNavigate: Function
  }

  constructor (props: Object) {
    super(props)
    this.registerEvent()
    this.state = this.propsToState( props )
  }

  registerEvent () {
    Actions.fn.closeDrawer = () => { 
      Actions.refresh({ key:this.state.key, open: false })
    }
  }

  componentWillReceiveProps (props: Object) {
    this.setState( this.propsToState( props ) )
  }

  propsToState (props: Object) {
    return { 
      key: props.navigationState.key,
      open: props.navigationState.open,
      children: props.navigationState.children,
      onNavigate: props.onNavigate
    }
  }

  tween (ratio: number) {
    const opacity = Math.max( 0.8, 1 - ratio ) 
    return {
      main: { 
        opacity: opacity
      }
    }
  }

  render () {
    return (
      <Drawer
        ref="navigation"
        open={this.props.navigationState.open}
        onOpen={()=>Actions.refresh({key:this.state.key, open: true})}
        onClose={()=>Actions.refresh({key:this.state.key, open: false})}
        type="displace"
        content={<Content/>}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        tweenDuration={150}
        negotiatePan={true}
        tweenHandler={ e => this.tween(e)}
      >
        <DefaultRenderer navigationState={this.state.children[0]} onNavigate={this.state.onNavigate} />
      </Drawer>
    )
  }

}
