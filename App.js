/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

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

import {
  ViroARSceneNavigator,
  Viro3DObject,
  ViroPolyline,
  ViroMaterials,
} from 'react-viro'

import ColorBar from './js/components/ColorBar'

const { width: viewportWidth } = Dimensions.get('window')

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"7B34E29B-F191-4301-919F-0A73150E487F",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/components/HelloWorldSceneAR')


var AR_NAVIGATOR_TYPE = "AR"

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = AR_NAVIGATOR_TYPE

import COLORS1 from './js/components/colors'
const startColor = COLORS1[Math.round(COLORS1.length / 2)].color

export default class ViroSample extends Component {
  constructor() {
    super()

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps,
      color: startColor,
    }

    this._getARNavigator = this._getARNavigator.bind(this)
    this._changeColor = this._changeColor.bind(this)
    this._exitViro = this._exitViro.bind(this)
  }

  render() {
    return this._getARNavigator()
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (<View style={{ flex: 1 }}>
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />

      <View style={{ position: 'absolute',
      top: '40%',
      left: viewportWidth/2-10,
      width: 20,
      height: 20,
      borderRadius: 15,
      borderWidth: 2,
      backgroundColor: 'transparent',
      borderColor: this.state.color, }} />

      <TouchableOpacity onPress={() => console.log('press')}
      style={{ position: 'absolute',
      bottom: 45,
      left: viewportWidth/2-40,
      width: 80,
      height: 80,
      borderWidth: 4,
      borderColor: 'grey',
      borderRadius: 50,
      zIndex: 1000,
      backgroundColor: 'transparent' }} >
      </TouchableOpacity>
      <ColorBar _changeColor={this._changeColor} />

    </View>)
  }

  _changeColor(newColor) {
    this.setState({
      color: newColor,
    })
  }

  // This function "exits" Viro by setting the navigatorType to AR_NAVIGATOR_TYPE.
  _exitViro() {
    this.setState({
      navigatorType : AR_NAVIGATOR_TYPE
    })
  }
}


var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
})

module.exports = ViroSample
