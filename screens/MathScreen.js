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

class Math extends React.Component {
  render() {
    return (
      <View style={styles.math}>
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

export default class MathScreen extends React.Component {
  static navigationOptions = {
    title: 'FormuRep',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Math
          image="https://t1.uc.ltmcdn.com/images/8/9/5/img_36598_ins_3732143_600.jpg"
          name="Teorema de Pitágoras"
          bio="Describe la relacion entre los catetos de un triangulo."
        />
        <Math
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Binomio_al_cuadrado.svg/220px-Binomio_al_cuadrado.svg.png"
          name="Binomio cuadrado perfecto"
          bio="Es el desarrollo de un binomio de la forma (x+a) al cuadrado."
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
  math: {
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
