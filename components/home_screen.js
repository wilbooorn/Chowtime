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
        <Image source={require('../assets/home-screen-image.jpg')} style={styles.background}>
          <Navbar />


          <View>
            <Text style={styles.welcome}>Welcome to</Text>
            <Text style={styles.welcome}>Chowtime</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate('Search')}
            title="Go to search!"
          ><Text>Press Me</Text></TouchableOpacity>
        </Image>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  welcome: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },

  homePage: {
    backgroundColor: 'transparent'
    // flex: 1,
    // justifyContent: 'space-between',
  },

  button: {
    backgroundColor: 'transparent'
  },

  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
})
