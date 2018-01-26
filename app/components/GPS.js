import React from 'react';
import { StyleSheet, Alert, Text, View, TextInput, KeyboardAvoidingView, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Constants, Location, Permissions } from 'expo';




export default class GPS extends React.Component {
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  }
  componentDidMount() {
    console.log('Component did mount');
    this.getCurrentPosition();
  }
  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          /*
          const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        this.setRegion(region);*/

        Alert.alert(
          'Alert Title',
          'position latitude'+ position.coords.latitude + 'position longitude' + position.coords.longitude,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )

      },
      (error) => {
        //TODO: better design
        switch (error.code) {
          case 1:
          if (Platform.OS === "ios") {
            Alert.alert("", "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Privacidad - Localización");
          } else {
            Alert.alert("", "Para ubicar tu locación habilita permiso para la aplicación en Ajustes - Apps - ExampleApp - Localización");
          }
          break;
          default:
          Alert.alert("", "Error al detectar tu locación");
        }
      }
    );
  } catch(e) {
    alert(e.message || "");
  }
};


render() {
  return (

    <View>
    <Text>Agenda</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  bigblue: {
    top: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
