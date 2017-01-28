/**
 * @flow
 */

import React from 'react'
// $FlowFixMe
import { View, Image } from 'react-native'
// $FlowFixMe
import { Row, Col, Grid } from 'react-native-elements'
// $FlowFixMe
import FadeIn from '@exponent/react-native-fade-in-image'
// $FlowFixMe
import { Actions } from 'react-native-router-flux'
// $FlowFixMe
import * as Progress from 'react-native-progress'
import { Button, Spacer, backScene as imageInputScene, BaseComponent, Loading } from '../defaults/defaults'
// $FlowFixMe
import Styles from '../../styles/styles'
import { errorHandler, uploadPhotoToImgur } from '../../general/general'
export { imageInputScene }

const style = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 25
  }
}

const ImageComp = ( props: Object ) => {
  return (
    <Grid>
      <Row 
        size={3}
      >
        <FadeIn 
          style={{ flex: 1 }}
          placeholderStyle={{ backgroundColor: Styles.defaultSceneStyles.backgroundColor }}
        >
          <Image
           resizeMode="contain"
           style={{ flex: 1, marginBottom: 25 }} 
           source={{ uri: props.uri }} 
          />
        </FadeIn>
      </Row>
      <Row 
        size={1}
        style={{ flex: 1, alignItems: 'stretch'}}
      >
        <View
          style={{ flex: 1 }}
        >
          <Button 
            title="Confirm"
            onPress={ () => { props.onPress() } } 
          />
        </View>
      </Row>
    </Grid>
  )
}

class ImageInput extends BaseComponent {

  state: {
    imageData: string
  }

  setState: Function

  constructor (props: Object) {
    super(props)
    this.state = {
      imageData: props.imageData,
      imageUrl: false
    }
  }

  componentDidMount () {
    this.getPhoto()
  }

  async getPhoto () {
    try {
      const photoUrl = await uploadPhotoToImgur({ image: this.state.imageData }) 
      this.setState({ imageUrl: photoUrl })
    }
    catch(err) {
      errorHandler( err )
      Actions.pop()
    }
  }

  render () {
    return (
      <View 
        style={style.container}
      >
        {
          this.state.imageUrl 
            ? 
            <ImageComp 
              onPress={ () => {  } } 
              uri={ this.state.imageUrl } 
            /> 
            : 
            <Loading/>
        }
      </View>
    )
  }
}

export default ImageInput
