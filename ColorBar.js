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
      <TouchableOpacity style={styles.canBlack} onPress={this.state._changeColor('black')}>
        <Image
          style={styles.img}
          source={require('./js/res/sprayCans/canBlack.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.canBlue} onPress={this.state._changeColor('blue')}>
        <Image
          style={styles.img}
          source={require('./js/res/sprayCans/canBlue.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.canRed} onPress={this.state._changeColor('red')}>
        <Image
          style={styles.img}
          source={require('./js/res/sprayCans/canRed.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.canPurple} onPress={this.state._changeColor('purple')}>
        <Image
        style={styles.img}
          source={require('./js/res/sprayCans/canPurple.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.canGreen} onPress={this.state._changeColor('green')}>
        <Image
          style={styles.img}
          source={require('./js/res/sprayCans/canGreen.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.canYellow} onPress={this.state._changeColor('yellow')}>
        <Image
          style={styles.img}
          source={require('./js/res/sprayCans/canYellow.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity style={styles.canWhite} onPress={this.state._changeColor('white')}>
        <Image
          style={styles.img}
          source={require('./js/res/sprayCans/canWhite.png')}
          />
      </TouchableOpacity>
    </View>);
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
