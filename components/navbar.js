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
<<<<<<< HEAD
    backgroundColor: "dodgerblue"
  }
=======
    backgroundColor: "blue"  }
>>>>>>> 6b92ae35ede78f309b1c975a51c7edb698e871dc
});
