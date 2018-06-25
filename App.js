import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ChemScreen from './screens/ChemScreen';
import EngScreen from './screens/EngScreen';
import MainScreen from './screens/MainScreen';
import MathScreen from './screens/MathScreen';
import PhyScreen from './screens/PhyScreen';

const AppNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  MathScreen: { screen: MathScreen },
  PhyScreen: { screen: PhyScreen },
  ChemScreen: { screen: ChemScreen },
  EngScreen: { screen: EngScreen },
});

const AppNavigation = () => <AppNavigator />;

export default class App extends React.Component {
  render() {
    return <AppNavigation />;
  }
}
