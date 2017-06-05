import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navbar from "./components/navbar.js";

export default class Chowtime extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          It's Chowtime!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
          This is a test.
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Chowtime', () => Chowtime);
