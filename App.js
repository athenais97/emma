import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Maps from './app/components/Maps';
import Tutoriel from './app/components/Tutoriel';
import Propos from './app/components/Propos';
import Actualite from './app/components/Actualite';
import Agenda from './app/components/Agenda';
import Moi from './app/components/Moi';
import Settings from './app/components/Settings'
import GPS from './app/components/GPS'


export const ProfileNav = StackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
      },
    },
    Moi: {
      screen: Moi,
      navigationOptions: ({ navigation }) => ({
      }),
    },
  Maps: {
    screen: Maps,
    navigationOptions: ({ navigation }) => ({
    }),
  },
  Agenda: {
    screen: Agenda,
    navigationOptions: ({ navigation }) => ({
    }),
  },
  GPS: {
    screen: GPS,
    navigationOptions: ({ navigation }) => ({
    }),
  }
});

export const Application = TabNavigator({
  Profile: {
    screen: ProfileNav,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={30} color={tintColor} />,
    },
  },
  Tutoriel: {
    screen: Tutoriel,
    navigationOptions: {
      tabBarLabel: 'Tutoriel',
      tabBarIcon: ({ tintColor }) => <Icon name="question-answer" size={30} color={tintColor} />
    },
  },
  Propos: {
    screen: Propos,
    navigationOptions: {
      tabBarLabel: 'A propos',
      tabBarIcon: ({ tintColor }) => <Icon name="lightbulb-outline" size={30} color={tintColor} />
    },
  },
  Actualite: {
    screen: Actualite,
    navigationOptions: {
      tabBarLabel: 'Actualité',
      tabBarIcon: ({ tintColor }) => <Icon name="info" size={30} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
        <Application />
    );
  }
}
