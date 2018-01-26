import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image, } from 'react-native';
import Maps from './Maps';

export default class Profile extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (

            <ImageBackground source={require('../../images/choix.jpg')} style={styles.container}>
              <Image source={require('../../images/emma.png')} style={styles.header}></Image>


              <Text style={{textDecorationLine: 'none', backgroundColor: 'transparent', color:'white'}}>
                      Aujourd hui Je suis:
              </Text>

            <TouchableOpacity
                  style={styles.sauveur}
                  onPress={() =>  navigate('Maps')}>
                  <Text style={styles.sauveurText}>
                    sauveur
                  </Text>
            </TouchableOpacity>

            <TouchableOpacity
                  style={styles.rdv}
                  onPress={() =>  navigate('Agenda')}>
                  <Text style={styles.rdvText}>
                    En Rendez-vous
                  </Text>
            </TouchableOpacity>

            <TouchableOpacity
                  onPress={() =>  navigate('Moi')}>
                  <Text style={styles.detailsText}>
                    Modifier profile
                  </Text>
            </TouchableOpacity>

            </ImageBackground>

    );
  }
}
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
    sauveur: {
      alignSelf: 'stretch',
      borderRadius: 20,
      backgroundColor: '#EDD918',
      padding: 20,
      alignItems: 'center',
      top: 50,
      marginLeft: 50,
      marginRight: 50
    },
    sauveurText: {
      color: 'white',
      fontSize: 16
    },
    rdv: {
      alignSelf: 'stretch',
      borderRadius: 20,
      backgroundColor: '#EDD918',
      padding: 20,
      alignItems: 'center',
      top: 70,
      marginLeft: 50,
      marginRight: 50
    },
  detailsText: {
      top: 80,
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: 16
    },
    rdvText: {
      color: 'white',
      fontSize: 16
    }
  });
