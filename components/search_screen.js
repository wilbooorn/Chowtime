import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SearchScreen extends React.Component{
  static navigationOptions = {
    title: 'Search',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Navbar />
        <Text>Search Screen</Text>
        <Button
          onPress={() => navigate('Result')}
          title="Go to results!"
        />
      </View>
    );
  }
}

export default SearchScreen;
