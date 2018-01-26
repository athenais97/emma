import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'root',
      password: '',
    }
  }

//check if the user already logged in//
  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

    var value = await AsyncStorage.getItem('user');
    if (value !==null) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
          <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

            <ImageBackground source={require('../../images/man.jpg')} style={styles.container}>

              <Image source={require('../../images/emma.png')} style={styles.header}></Image>

              <TextInput
                style={styles.textInput} placeholder='Identifiant'
                onChangeText={ (username) => this.setState({username}) }
                underlineColorAndroid='transparent'
              />

              <TextInput
                style={styles.textInput} placeholder='Mot de passe'
                onChangeText={ (password) => this.setState({password}) }
                underlineColorAndroid='transparent'
                secureTextEntry={true}
              />

              <TouchableOpacity
                    style={styles.mdp}
                    onPress={this.lostmdp}>
                    <Text>Mot de passe oublié?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={this.login}>
                    <Text style={styles.loginText}>
                      Connexion
                    </Text>
              </TouchableOpacity>

              <TouchableOpacity
                      style={styles.compte}
                      onPress={this.compte}>
                      <Text>Inscrivez-vous ici</Text>
              </TouchableOpacity>

            </ImageBackground>

          </KeyboardAvoidingView>
    );
  }
    login = () => {

        fetch('http://176.159.232.72:3306/users'), {
            methode: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            })
        }
        return fetch('http://176.159.232.72:3306/users')
        .then((response) => response.json())
        .then ((res) => {

            if (res.success == true) {
              AsyncStorage.setItem('user', res.use);
              this.props.navigation.navigate('Profile');
            } else {
                alert(res.message);
            }
        })
        .done();
    }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    borderColor: 'yellow',
    borderRadius: 1,
    paddingRight: 40
  },
  compte: {
    top: 60,
  },

  header: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white'
  },

  loginBtn: {
    alignSelf: 'stretch',
    borderRadius: 20,
    backgroundColor: '#EDD918',
    padding: 20,
    alignItems: 'center',
    top: 50,
    marginLeft: 50,
    marginRight: 50
  },
  loginText: {
    color: 'white',
    fontSize: 12
  }
});
