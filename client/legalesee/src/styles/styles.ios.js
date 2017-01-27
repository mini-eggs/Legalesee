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
    borderBottomWidth: Sizes.navigationBarHeight,
  },
  titleStyle: {
    color:'#fff', 
    fontWeight:'600', 
    justifyContent:'center', 
    alignItems:'center'
  },
  defaultSceneStyles: {
    flex: 1,
    backgroundColor: '#cecece',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    marginTop: 0,
    marginBottom: 0
  }
}

export default Style
