import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, Image } from 'react-native';

class ResultScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      businesses: ["empty"]
    };
  }

  componentDidMount(){
    const url = this.props.navigation.state.params.url;
    const object = {
      headers: {"Authorization": "Bearer M59IVacUQeax9jvkA66bEhIYydGofBCM_aqmYqykQZG_bGajU5_6MtLB-7C5AFTq6SyskoRFFvC79r5zo9KuY58a67oIXVHKd66pEvJtEr3Y-n8yQavwyIB6K54xWXYx"},
      method: "GET"
    }
    fetch(url, object)
      .then(response => response.json()).then(data => this.setState({businesses: data}))
  }

  static navigationOptions = {
    title: 'Result',
  };
  render(){
    if (this.state.businesses[0] === "empty") {
      return(<Text>Loading</Text>)
    }
    else if (businesses.length === 0){
      return <Text>No mo</Text>
    } else {
      showBusiness = this.state.businesses[0]
      const { navigate } = this.props.navigation;
      console.log(showBusiness);
      return (
        <View>
          <Text>HI</Text>
        </View>
      );
    }
  }
}

export default ResultScreen;
