import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimmensions
} from 'react-native'
import MapView from 'react-native-maps'

const {width,height} = Dimmensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


export default class geoLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        longitudeDelta: 0,
        latitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }

  watchID: ?number = null

  componentDidMount() {
    navigator.geoLocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.cords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout:20000,maximumAge:1000;})

    this.watchID = navigator.geoLocation/watchPosition((position)=> {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.cords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }

  componentWillUnmount() {
    navigator.geoLocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style{styles.container}>
        <MapView
        style ={styles.map},
        initialRegion={this.state.initialPosition}>

          <MapView.Marker
          coordinate={this.state.MarkerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker}>
              </View>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',

      },

  })
}
