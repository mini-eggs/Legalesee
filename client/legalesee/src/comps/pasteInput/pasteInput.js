/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, TextInput, Alert } from 'react-native'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import Theme from '../../styles/theme'
import { Button, Spacer, backScene as pasteInputScene, BaseComponent } from '../defaults/defaults'
export { pasteInputScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  TextInput: {
    textAlignVertical: 'top',
    flex: 1,
    padding: 25,
    fontSize: Theme.fontSize
  }
}

class PasteInput extends BaseComponent {

  state: {
    content: string
  }

  setState: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      content: ' '
    }
  }

  onChange (txt: string) {
    this.setState({ content: txt })
  }

  next = () => Actions.ReadInput({ inputText: this.state.content, inputType: 'text' })

  render () {
    return (
      <View style={style.container}>
        <TextInput 
          style={style.TextInput} 
          underlineColorAndroid='transparent' 
          onChangeText={this.onChange.bind(this)} 
          value={this.state.content} 
          placeholder="Enter content..." 
          autoCapitalize="none" 
          ref="MainInput" 
          autoCapitalize="none" 
          autoCorrect={false} 
          autoFocus={true} 
          multiline={true}
          keyboardType="default"
          onSubmitEditing={this.next} 
          returnKeyType="go"
          blurOnSubmit={true}
        />
      </View>
    )
  }
}

export default PasteInput
