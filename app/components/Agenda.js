import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, KeyboardAvoidingView, Button, TouchableHighlight, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Constants, Location, Permissions } from 'expo';

export default class Agenda extends React.Component {

  _onPressButton() {
    state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
