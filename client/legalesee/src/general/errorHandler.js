/**
 * @flow
 */

// $FlowFixMe
import { Alert } from 'react-native'
// $FlowFixMe
import { Actions, ActionConst } from 'react-native-router-flux'

const errorHandler = (err: any) => {
  const title = 'Woah!'
  const description = 'An error has occurred.'
  const buttons = [ 
    { 
      text: 'OK', 
      onPress: () => { 
        Actions.Discover({ type: ActionConst.RESET })
      } 
    }
  ]

  Alert.alert( title, description, buttons )
  console.log( err )
}

export default errorHandler
