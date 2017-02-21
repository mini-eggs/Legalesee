/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Image, ScrollView, Text } from 'react-native'
// $FlowFixMe
import { List, ListItem } from 'react-native-elements'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
import { Button, Spacer, backToHomeScene as readInputScene, BaseComponent, Loading } from '../defaults/defaults'
// $FlowFixMe
import Styles from '../../styles/styles'
import Theme from '../../styles/theme'
import { errorHandler, uploadPhotoToImgur, api } from '../../general/general'
export { readInputScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  loadingContainer: {
    padding: 25
  },
  List: {
  },
  ListItem: {
  },
  titleStyle: {
    fontSize: Theme.fontSize
  } ,
  listIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

class ReadInput extends BaseComponent {

  state: {
    inputText: string,
    inputType: string,
    responseData: Array<Object>,
    loading: boolean
  }

  setState: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      inputText: props.inputText,
      inputType: props.inputType,
      responseData: [],
      loading: true
    }
  }

  componentDidMount () {
    this.loadData()
  }

  async loadData () {
    try {
      const props = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: this.state.inputText,
          type: this.state.inputType
        })
      }
      const res = await fetch( api + 'legalesee/read' , props )
      const data = await res.json()
      if( parseInt( data.status ) === 1 ) {
        console.log( data )
        this.setState({ responseData: data.response, loading: false })
      }
      else {
        errorHandler( data )
      }
    }
    catch( err ) {
      errorHandler( err )
    }
  }

  renderData () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <List containerStyle={style.List} >
          {
            this.state.responseData.map( (item, i) => {
              const num = Math.round( parseFloat( item.relevance ) * 100 ) / 100
              const badge = { value: num.toString() + '%' }
              return (
                <ListItem
                  key={i}
                  title={item.text}
                  badge={badge}
                  leftIcon={{ name: item.icon, style: style.listIcon }}
                  rightIcon={{ name: 'chevron-right', style: style.listIcon }}
                  containerStyle={style.ListItem}
                  onPress={item.onPress}
                  titleStyle={style.titleStyle}
                />
              )
            })
          }
        </List>
      </ScrollView>
    )
  }

  renderLoading () {
    return (
      <View style={style.loadingContainer}>
        <Loading/>
      </View>
    )
  }

  render () {
    return (
      <View style={style.container}>
        {
          this.state.loading ? this.renderLoading() : this.renderData()
        }
      </View>
    )
  }
}

export default ReadInput
