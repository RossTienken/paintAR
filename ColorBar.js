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

  constructor(props) {
    super(props);

    this.state = {
      _changeColor: props._changeColor,
    } // Set initial state here
  }


  render() {
    return (<View>
      <TouchableOpacity onPress={this.state._changeColor('black')}>
        <Image
          style={styles.canBlack}
          source={require('./js/res/sprayCans/canBlack.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.state._changeColor('blue')}>
        <Image
          style={styles.canBlue}
          source={require('./js/res/sprayCans/canBlue.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.state._changeColor('red')}>
        <Image
          style={styles.canRed}
          source={require('./js/res/sprayCans/canRed.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.state._changeColor('purple')}>
        <Image
          style={styles.canPurple}
          source={require('./js/res/sprayCans/canPurple.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.state._changeColor('green')}>
        <Image
          style={styles.canGreen}
          source={require('./js/res/sprayCans/canGreen.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.state._changeColor('yellow')}>
        <Image
          style={styles.canYellow}
          source={require('./js/res/sprayCans/canYellow.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.state._changeColor('white')}>
        <Image
          style={styles.canWhite}
          source={require('./js/res/sprayCans/canWhite.png')}
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
