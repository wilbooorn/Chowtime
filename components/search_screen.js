import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ModalPicker from 'react-native-modal-picker';
import Button from 'react-native-button';

const PRICES = {
  "$": "1",
  "$$": "1,2",
  "$$$": "1,2,3",
  "$$$$": "1,2,3,4"
};

dataPrice = Object.keys(PRICES).map((price, idx) => (
  {key: idx, label: price}
));

const CATEGORIES = {
  "American": "newamerican",
  "Asian Fusion": "asianfusion",
  "Barbeque": "bbq",
  "Breakfast & Brunch": "breakfast_brunch",
  "Burgers": "burgers",
  "Cafes": "cafes",
  "Chinese": "chinese",
  "Delis": "delis",
  "Diners": "diners",
  "Fast Food": "hotdogs",
  "Hawaiian": "hawaiian",
  "Indian": "indpak",
  "Italian": "italian",
  "Japanese": "japanese",
  "Korean": "korean",
  "Mediterranean": "mediterranean",
  "Mexican": "mexican",
  "Pizza": "pizza",
  "Salad": "salad",
  "Sandwiches": "sandwiches",
  "Seafood": "seafood",
  "Steakhouses": "steak",
  "Sushi Bars": "sushi",
  "Thai": "thai",
  "Vegetarian": "vegetarian",
  "Vietnamese": "vietnamese",
  "Waffles": "waffles"
}

dataCategory = Object.keys(CATEGORIES).map((cat, idx) => (
  {key: idx, label: cat}
));

const DISTANCE = {
  "1 Mile": 1609,
  "2 Miles": 3218,
  "3 Miles": 4828,
  "4 Miles": 6437,
  "5 Miles": 8046,
  "6 Miles": 9656,
  "7 Miles": 11265,
  "8 Miles": 12874,
  "9 Miles": 14484,
  "10 Miles": 16093,
};

dataDistance = Object.keys(DISTANCE).map((dist, idx) => (
  {key: idx, label: dist}
));


class SearchScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: '',
      price: '',
      distance: '',
      latitude: 33.68,
      longitude: -117.82
    };
    this.handleButton = this.handleButton.bind(this)
  }

  componentDidMount(){
    const Navigator = window.navigator;
    Navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
      () => true);
  }

  static navigationOptions = {
    title: 'Search',
  };

  handleButton(e){
    e.preventDefault();
    const { navigate } = this.props.navigation;
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${this.state.latitude}&longitude=${this.state.longitude}&categories=${CATEGORIES[this.state.category]}&radius=${DISTANCE[this.state.distance]}&price=${PRICES[this.state.price]}`
    navigate('Result', {url})
  }


  render(){

    return (
      <View style={styles.search}>
        <Text style={styles.welcome}>What are you feeling?</Text>
        <View style={styles.container}>
          <Text style={styles.label}>Price</Text>
          <ModalPicker
            data={dataPrice}
            style={{flex: 1}}
            initValue="Select Price Range"
            onChange={(option)=>{ this.setState({price:option.label})}}>
            <Text style={styles.defaultText}>
              {this.state.price === '' ? "Select Price" : this.state.price}
            </Text>
          </ModalPicker>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Category</Text>
          <ModalPicker
            data={dataCategory}
            style={{flex: 1}}
            initValue="Select Category"
            onChange={(option)=>{ this.setState({category:option.label})}}>
            <Text style={styles.defaultText}>
              {this.state.category === '' ? "Select Category" : this.state.category}
            </Text>
          </ModalPicker>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Distance</Text>
          <ModalPicker
            data={dataDistance}
            style={{flex: 1}}
            initValue="Select Distance"
            onChange={(option)=>{ this.setState({distance:option.label})}}>
            <Text style={styles.defaultText}>
              {this.state.distance === '' ? "Select Distance" : this.state.distance}
            </Text>
          </ModalPicker>
        </View>

        <Button containerStyle={styles.button}
          onPress={this.handleButton} >
          <Text style={styles.buttonText}>Search</Text>

        </Button>
      </View>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
  search: {
    alignItems: "center",
    justifyContent: "center",
    height: 500
  },

  welcome: {
    fontSize: 30,
    marginBottom: 30
  },

  defaultText: {
    fontSize: 24,
  },

  container: {
    alignItems: 'center',
    flex: 1
  },

  label: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  button: {

  },

  buttonText: {

  }
})
