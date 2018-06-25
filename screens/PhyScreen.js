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

class Phy extends React.Component {
  render() {
    return (
      <View style={styles.phy}>
        <View style={styles.header}>
          <Image
            source={{ uri: this.props.image }}
            style={{ width: 150, height: 110 }}
          />
          <View style={styles.bio}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text style={styles.title}>{this.props.bio}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default class PhyScreen extends React.Component {
  static navigationOptions = {
    title: 'FormuRep',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Phy
          image="https://k46.kn3.net/taringa/F/2/F/B/5/A/charly_red_1970/088.jpg"
          name="Segunda Ley de Newton"
          bio="Describe relacion entre Fuerza y aceleracion."
        />
        <Phy
          image="https://tecnologiacsj.files.wordpress.com/2017/01/e271b-leydeohm.jpg"
          name="Ley de Ohm"
          bio="Describe la relacion entre el voltaje y la resistencia de un componente."
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  phy: {
    backgroundColor: '#E6E6E6',
    width: '100%',
  },
  header: {
    flexDirection: 'column',
  },
  bio: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    color: '#6B6B6B',
  },
});
