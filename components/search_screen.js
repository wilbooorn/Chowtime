import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ModalPicker from 'react-native-modal-picker';
import Button from 'apsl-react-native-button'

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
      // category: '',
      category: 'American',
      // price: '',
      price: '$',
      // distance: '',
      distance: '2 Miles',
      latitude: 33.68,
      longitude: -117.82,
      // disabled: true
      disabled: false
    };
    this.handleButton = this.handleButton.bind(this)
    this.handlePrice = this.handlePrice.bind(this)
    this.handleDistance = this.handleDistance.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
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

  handlePrice(option){
    this.setState({price: option.label})
    if(this.state.distance !== '' && this.state.category !== ''){
      this.setState({disabled: false})
    }
  }

  handleDistance(option){
    this.setState({distance:option.label})
    if(this.state.price !== '' && this.state.category !== ''){
      this.setState({disabled: false})
    }
  }

  handleCategory(option){
    this.setState({category: option.label})
    if(this.state.distance !== '' && this.state.price !== ''){
      this.setState({disabled: false})
    }
  }


  render(){

    return (
      <View style={styles.search}>
        <Image source={require('../assets/white-text-logo.png')} style={styles.logo} />
        <View style={styles.container}>
          <Text style={styles.label}>Price</Text>
          <ModalPicker
            data={dataPrice}
            style={{flex: 1}}
            initValue="Select Price Range"
            onChange={(option) => this.handlePrice(option)}>
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
            onChange={(option) => this.handleCategory(option)}>
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
            onChange={(option) => this.handleDistance(option)}>
            <Text style={styles.defaultText}>
              {this.state.distance === '' ? "Select Distance" : this.state.distance}
            </Text>
          </ModalPicker>
        </View>

        <Button style={styles.button}
          disabledStyle={{opacity: 0.5}}
          onPress={this.handleButton}
          isDisabled={this.state.disabled}
          textStyle={styles.buttonText}>
          Search

        </Button>
      </View>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
  search: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'dodgerblue'
  },

  welcome: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 10
  },

  defaultText: {
    fontSize: 24,
    backgroundColor: 'white',
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
  },

  container: {
    alignItems: 'center',
    flex: 1
  },

  label: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5
  },

  button: {
    padding: 10,
    height: 45,
    width: 300,
    alignSelf: 'center',
    bottom: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  buttonText: {
      fontWeight: 'bold'
  },

  logo: {
    marginTop: 10,
    marginBottom: 10
  }
})
