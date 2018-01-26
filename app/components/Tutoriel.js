import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Tutoriel extends React.Component {

  render() {
    return (

      <View>
              <Text style={styles.bigblue}>Tutoriel</Text>
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
