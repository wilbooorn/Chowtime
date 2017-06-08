import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, Image } from 'react-native';
import Button from 'react-native-button';

class ResultScreen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      businesses: ["empty"],
      showBusiness: ""
    };

    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount(){
    const url = this.props.navigation.state.params.url;
    const object = {
      headers: {"Authorization": "Bearer M59IVacUQeax9jvkA66bEhIYydGofBCM_aqmYqykQZG_bGajU5_6MtLB-7C5AFTq6SyskoRFFvC79r5zo9KuY58a67oIXVHKd66pEvJtEr3Y-n8yQavwyIB6K54xWXYx"},
      method: "GET"
    }
    fetch(url, object)
      .then(response => response.json()).then(data => this.setState({businesses: data.businesses, showBusiness: data.businesses[0]}))
  }

  static navigationOptions = {
    title: 'Result',
  };

  handleNext() {
    this.state.businesses.shift()
    this.setState({businesses: this.state.businesses, showBusiness: this.state.businesses[0]})
  }

  render(){
    if (this.state.businesses[0] === "empty") {
      return(<Text>Loading</Text>)
    }
    else if (this.state.businesses.length === 0){
      return <Text>No mo</Text>
    } else {
      const { navigate } = this.props.navigation;

      return (
        <View>
          <Text>{this.state.showBusiness.name}</Text>
          <Image source={{uri: this.state.showBusiness.image_url}}
            style={{width: 300, height: 300}}
            >
          </Image>
          <Button onPress={this.handleNext}>
            <Text>Nahh</Text>
          </Button>
        </View>
      );
    }
  }
}

export default ResultScreen;
