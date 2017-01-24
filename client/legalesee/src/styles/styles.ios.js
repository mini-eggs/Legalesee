/**
 * @flow
 */

import Theme from './theme'
// $FlowFixMe
import Sizes from './device'

const Style = {
  navigationBarStyle: {
    backgroundColor: Theme.primaryColor, 
    borderBottomColor: 'transparent', 
    borderBottomWidth: Sizes.navigationBarHeight
  },
  titleStyle: {
    color:'#fff', 
    fontWeight:'600', 
    justifyContent:'center', 
    alignItems:'center'
  }
}

export default Style
