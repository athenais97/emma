import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Actualite extends React.Component {

  render() {
    return (
      <View>
              <Text style={styles.bigblue}>Actualité</Text>
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
