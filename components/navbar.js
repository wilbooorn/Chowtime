import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Navbar extends React.Component {
  render() {
    return (
      <View id="Navbar" style={styles.navbar}></View>
    );
  }
}

export default Navbar;
const styles = StyleSheet.create({
  navbar: {
    height: 20,
    backgroundColor: "dodgerblue"
  }
});
