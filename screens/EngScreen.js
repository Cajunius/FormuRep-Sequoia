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

class Eng extends React.Component {
  render() {
    return (
      <View style={styles.eng}>
        <View style={styles.header}>
          <Image
            source={{ uri: this.props.image }}
            style={{ width: 151, height: 110 }}
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

export default class EngScreen extends React.Component {
  static navigationOptions = {
    title: 'FormuRep',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Eng
          image="https://upload.wikimedia.org/wikipedia/commons/5/52/Girl_of_Vietnam.jpg"
          name="Blah"
          bio="Artista Plástica"
        />
        <Eng
          image="https://c1.staticflickr.com/2/1542/25128697035_05191bfe34_b.jpg"
          name="Marina"
          bio="Matemático"
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
  eng: {
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
