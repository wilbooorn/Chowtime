import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet } from 'react-native';

class ResultScreen extends React.Component{
  static navigationOptions = {
    title: 'Result',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Navbar />
        <Text>Result Screen</Text>
      </View>
    );
  }
}

export default ResultScreen;
