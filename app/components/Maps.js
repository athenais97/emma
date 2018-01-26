import React from 'react';
import {TabNavigator} from 'react-navigation';
import { StyleSheet, Text, Alert, View, TextInput, KeyboardAvoidingView,  ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';
import { Constants, Location, Permissions } from 'expo';

export default class Maps extends React.Component {

  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }
  componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
      }

      onMapPress(e) {
        console.log(e.nativeEvent.coordinate.longitude);
        let region = {
          latitude:       e.nativeEvent.coordinate.latitude,
          longitude:      e.nativeEvent.coordinate.longitude,
          latitudeDelta:  0.00922*1.5,
          longitudeDelta: 0.00421*1.5
        }
        this.onRegionChange(region, region.latitude, region.longitude);
      }

      render() {
        return (

          <MapView.Marker
              identifier={marker.get('id')}
              onPress={this._onMarkerPress.bind(this, marker.get('id'))}
              ref={ref => { this[marker.get('id')] = ref; }}
            >
              <Image // image as custom marker
                source={
                  require('../../images/pin.png') // eslint-disable-line global-require
                }
                style={{
                  height: pinMarkerSize,
                  width: pinMarkerSize,
                }}
              />
              <MapView.Callout>
                <View
                  style={{
                    backgroundColor: 'red',
                    height: 300,
                    width: 300,
                  }}
                >
                  <Text>Callout here</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>

          <View style={{flex: 1}}>
            <MapView
              style={styles.map}
              region={this.state.mapRegion}
              showsUserLocation={true}
              followUserLocation={true}
              onRegionChange={this.onRegionChange.bind(this)}
              onPress={this.onMapPress.bind(this)}>
              <MapView.Marker
                coordinate={{
                  latitude: (this.state.lastLat + 0.00050) || -36.82339,
                  longitude: (this.state.lastLong + 0.00050) || -73.03569,
                }}>
                <View>
                  <Text style={{color: '#000'}}>
                    { this.state.lastLong } / { this.state.lastLat }
                  </Text>
                </View>
              </MapView.Marker>
            </MapView>
          </View>
        );
      }
    }
  /* render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 44.8333,
            longitude: -0.58,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          />
            </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    borderColor: 'yellow',
    borderRadius: 1,
    paddingRight: 40
  },
  header: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  }
});
