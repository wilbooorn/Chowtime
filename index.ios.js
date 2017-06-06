import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from "./components/app";

export default class Chowtime extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Chowtime', () => Chowtime);
