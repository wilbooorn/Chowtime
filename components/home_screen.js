import React from 'react';
import Navbar from './navbar';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
        <Image source={require('../assets/slack-imgs.jpg')} style={styles.background}>
          <Image source={require('../assets/Chowtime-logo.png')} style={styles.logo}>
          </Image>
          <Button
            containerStyle={styles.button}
            onPress={() => navigate('Search')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Button>
        </Image>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    top: 30
  },

  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: 'space-between'
  },

  button: {
    padding: 10,
    height: 45,
    width: 300,
    alignSelf: 'center',
    bottom: 50,
    borderRadius: 4,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontWeight: 'bold'
  }
})
