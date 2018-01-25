import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  Dimensions,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native'
import COLORS1 from './colors'
import Carousel from 'react-native-snap-carousel'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
const startColor = Math.round(COLORS1.length / 2)

export default class ColorBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      _changeColor: props._changeColor,
      slider1ActiveSlide: startColor,
      slider1Ref: null
    } // Set initial state here
    this._renderItem = this._renderItem.bind(this)
  }

  render() {
    return (<View style={styles.views}>
      <Carousel
        ref={(c) => { this._carousel = c }}
        data={COLORS1}
        firstItem={startColor}
        renderItem={this._renderItem}
        sliderWidth={viewportWidth}
        itemWidth={80}
        itemHeight={80}
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        activeSlideAlignment={'center'}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        removeClippedSubviews={false}
        onSnapToItem={(idx) => this.state._changeColor(COLORS1[idx].color)}
        customAnimationType={'spring'}
        customAnimationOptions={{
          friction: 4,
          tension: 40
        }} />
    </View> )
  }

  _renderItem({item, index}) {
      return (
        <TouchableOpacity style={styles.box} onPress={() => { this._carousel.snapToItem(index) }}>
        <Image
          style={{
            height: 76,
            width: 76,
            backgroundColor: 'transparent'}}
          source={item.img} />
        </TouchableOpacity>
      )
   }

}

var styles = StyleSheet.create({
  views: {
    position: 'absolute',
    bottom: 25,
    backgroundColor: 'transparent',
  },
  box: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  slider: {
    marginTop: 10,
  },
  sliderContentContainer: {
    paddingVertical: 20, // for custom animation
    backgroundColor: 'transparent',
  },
})

module.exports = ColorBar
