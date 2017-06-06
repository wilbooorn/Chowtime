import React from 'react';
import Navbar from './navbar';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
        <Image source={require('../assets/slack-imgs.jpg')} style={styles.background}>
          <Image source={require('../assets/Chowtime-logo.png')} style={styles.logo}>
          </Image>
          <Button
            onPress={() => navigate('Search')}
            title="Get Started!">
            <Text>Press Me</Text>
          </Button>
        </Image>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    top: 20
  },

  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: 'space-between'
  }
})
