import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

class Navbar extends React.Component {
  render() {
    return (
      <View id="Navbar" style={styles.Navbar}></View>
    );
  }
}

export default Navbar;
const styles = Stylesheet.create({
  Navbar: {
    height: 20,
    backgroundColor: "dodgerblue"
  }
});
