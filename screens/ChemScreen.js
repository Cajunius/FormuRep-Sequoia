import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView} from 'react-native';
import { createStackNavigator,} from 'react-navigation';

class Chem extends React.Component {
  render(){
    return(
      <View style={styles.chem} >
        <View style={styles.header}>
          <Image source={{uri: this.props.image }} style={{width: 150, height: 110}}/>
          <View style={styles.bio}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text style={styles.title}>{this.props.bio}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default class ChemScreen extends React.Component {
  static navigationOptions = {
    title: 'FormuRep',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Chem image='http://images.slideplayer.com/18/6086387/slides/slide_1.jpg' name="Ley de los gases ideales" bio="Describe relacion entre temperatura, volumen y presión."/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chem:{
    backgroundColor: '#E6E6E6',
    width: '100%',
  },
  header:{
    flexDirection: 'column',
  },
  bio:{
    flexDirection: 'column',
  },
  title:{
    fontSize: 16,
    color: '#6B6B6B',
  }
});