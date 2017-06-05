import React from 'react';
import Navbar from './navbar';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Navbar />
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigate('Search')}
          title="Go to search!"
        />
      </View>
    )
  }
}

export default HomeScreen;
