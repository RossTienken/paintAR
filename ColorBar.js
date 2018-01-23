import React, { Component } from 'react';
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
} from 'react-native';

export default class ColorBar extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  _changeColor = () => {
    this.setState({
      color: this.color,
    })
    console.log(this.state.color)
  }

  render() {
    return (<View>
      <TouchableOpacity onPress={this._changeColor}>
        <Image
          style={styles.canBlack}
          source={require('./js/res/sprayCans/canBlack.png')}
          color={'black'}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this._changeColor}>
        <Image
          style={styles.canBlue}
          source={require('./js/res/sprayCans/canBlue.png')}
          color={'blue'}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this._changeColor}>
        <Image
          style={styles.canRed}
          source={require('./js/res/sprayCans/canRed.png')}
          color={'red'}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this._changeColor}>
        <Image
          style={styles.canPurple}
          source={require('./js/res/sprayCans/canPurple.png')}
          color={'purple'}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this._changeColor}>
        <Image
          style={styles.canGreen}
          source={require('./js/res/sprayCans/canGreen.png')}
          color={'green'}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this._changeColor}>
        <Image
          style={styles.canYellow}
          source={require('./js/res/sprayCans/canYellow.png')}
          color={'yellow'}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this._changeColor}>
        <Image
          style={styles.canWhite}
          source={require('./js/res/sprayCans/canWhite.png')}
          color={'white'}
          />
      </TouchableOpacity>
    </View>);
  }

}

var styles = StyleSheet.create({
  canBlack: {
    position: 'absolute',
    bottom: 5,
    left: '2%',
    width: 45,
    height: 45,
    backgroundColor: 'transparent'
  },
  canBlue: {
    position: 'absolute',
    bottom: 5,
    left: '16%',
    width: 45,
    height: 45,
    backgroundColor: 'transparent'
  },
  canRed: {
    position: 'absolute',
    bottom: 5,
    left: '30%',
    width: 45,
    height: 45,
    backgroundColor: 'transparent'
  },
  canPurple: {
    position: 'absolute',
    bottom: 5,
    left: '44%',
    width: 45,
    height: 45,
    backgroundColor: 'transparent'
  },
  canGreen: {
    position: 'absolute',
    bottom: 5,
    left: '58%',
    width: 45,
    height: 45,
    backgroundColor: 'transparent'
  },
  canYellow: {
    position: 'absolute',
    bottom: 5,
    left: '72%',
    width: 45,
    height: 45,
    backgroundColor: 'transparent'
  },
  canWhite: {
    position: 'absolute',
    bottom: 5,
    left: '86%',
    width: 45,
    height: 45,
    backgroundColor: 'transparent'
  },
});

module.exports = ColorBar;
