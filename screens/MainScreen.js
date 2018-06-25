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

// No me funciona esto: import styles from '../styles';

export default class MainScreen extends React.Component  {
  static navigationOptions = {
    title: 'FormuRep',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      //<ScrollView style={styles.background}>
      <View style={styles.mainscreen}>
        <Text style={styles.separationtext}> 

        </Text> 
        <Button
          title="Matemática"
          onPress={() => navigate('MathScreen')}
        />
        <Text style={styles.separationtext}> 

        </Text>
        <Button
          title="Física"
          onPress={() => navigate('PhyScreen')}
          color="#E6E6"
        />
        <Text style={styles.separationtext}> 

        </Text>
        <Button
          title="Química"
          onPress={() => navigate('ChemScreen')}
        />
        <Text style={styles.separationtext}> 

        </Text>
        <Button
          title="Ingeniería"
          onPress={() => navigate('EngScreen')}
          color="#E6E6"
        />
        <Text style={styles.separationtext}> 

        </Text> 
      </View>
      //</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0005',
    width: '100%',
  },
  mainscreen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#87f6',
    width: '99%',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  background: {
    backgroundColor: '#f788',
  },
  separationtext: {
    margin: 5,
    flexDirection: 'column',
    backgroundColor: '#f78e',
  },
  title: {
    fontSize: 20,
    color: '#6B6B6B',
  },
});