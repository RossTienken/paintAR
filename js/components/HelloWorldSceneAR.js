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
  ViroARPlane,
  ViroARPlaneSelector,
  ViroNode,
  ViroButton,
  ViroAnimations,
  ViroSurface,
} from 'react-viro';


export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = { };

  }

  render() {
    return ( <ViroARScene>
    <ViroARPlane minHeight={0} minWidth={0}>
      <ViroSpotLight
        innerAngle={10}
        outerAngle={45}
        direction={[0,-1,-.2]}
        position={[0, 3, 0]}
        color="#ffffff"
        castsShadow={true}
        influenceBitMask={2}
        shadowMapSize={2048}
        shadowNearZ={2}
        shadowFarZ={5}
        shadowOpacity={.7} />

        <Viro3DObject
          source={require('../res/emoji_smile/emoji_smile.vrx')}
          position={[0, .2, 0]}
          scale={[.2, .2, .2]}
          type="VRX"
          lightReceivingBitMask={3}
          shadowCastingBitMask={2}/>

        <ViroSurface
          rotation={[-90,0,0]}
          width={5} height={5}
          arShadowReceiver={true}
          lightReceivingBitMask={2} />

      </ViroARPlane>
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
