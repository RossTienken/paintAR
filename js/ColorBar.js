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
import Carousel from 'react-native-snap-carousel';

const SLIDER_1_FIRST_ITEM = 1

export default class ColorBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      _changeColor: props._changeColor,
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      slider1Ref: null
    } // Set initial state here
    this._renderItem = this._renderItem.bind(this)
  }

  render() {
    return (<Carousel
        ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }) } }}
        data={COLORS1}
        renderItem={this._renderItem}
        sliderWidth={300}
        itemWidth={60}
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        activeSlideAlignment={'start'}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        removeClippedSubviews={false}
        customAnimationType={'spring'}
        customAnimationOptions={{
          friction: 4,
          tension: 40
        }} />
      )
  }

  _renderItem ({item, index}) {
    let canCol = `can${item.color}`
    let lowerC = item.color.toLowerCase()
      return (
        <TouchableOpacity style={styles.canCol} onPress={this.state._changeColor(lowerC)}>
        <Image
        style={styles.img}
        source={item.img} />
        </TouchableOpacity>
      )
   }

}

var styles = StyleSheet.create({
  img: {
    height: 45,
    width: 45,
  },
  canBlack: {
    position: 'absolute',
    bottom: 5,
    left: '2%',
    width: 45,
    height: 45,
  },
  canBlue: {
    position: 'absolute',
    bottom: 5,
    left: '16%',
    width: 45,
    height: 45,
  },
  canRed: {
    position: 'absolute',
    bottom: 5,
    left: '30%',
    width: 45,
    height: 45,
  },
  canPurple: {
    position: 'absolute',
    bottom: 5,
    left: '44%',
    width: 45,
    height: 45,
  },
  canGreen: {
    position: 'absolute',
    bottom: 5,
    left: '58%',
    width: 45,
    height: 45,
  },
  canYellow: {
    position: 'absolute',
    bottom: 5,
    left: '72%',
    width: 45,
    height: 45,
  },
  canWhite: {
    position: 'absolute',
    bottom: 5,
    left: '86%',
    width: 45,
    height: 45,
  },
  slider: {
        marginTop: 15
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
})

module.exports = ColorBar
