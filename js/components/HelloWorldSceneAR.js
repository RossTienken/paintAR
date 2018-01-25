'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroButton,
  ViroAnimations,
} from 'react-viro';


export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = { };

  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "Hello Brian!"})}}>

        <ViroAmbientLight color={"#aaaaaa"} />

        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true} />

      </ViroARScene>
    );
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
