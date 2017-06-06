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
        <Text style={styles.welcome}>Welcome To</Text>
        <Text style={styles.welcome}>Chowtime</Text>
        <Button
          onPress={() => navigate('Search')}
          title="Go to search!"
        />
      </View>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  welcome: {
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
