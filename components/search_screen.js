import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, TextInput, Image, Slider } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ModalPicker from 'react-native-modal-picker';
import Button from 'apsl-react-native-button';
import { SegmentedControls} from 'react-native-radio-buttons';

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
  1: 1609,
  2: 3218,
  3: 4828,
  4: 6437,
  5: 8046,
  6: 9656,
  7: 11265,
  8: 12874,
  9: 14484,
  10: 16093,
};


class SearchScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: '',
      price: '$',
      distance: 5,
      latitude: 33.68,
      longitude: -117.82,
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
    if(this.state.category ===  ''){
      const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${this.state.latitude}&longitude=${this.state.longitude}&radius=${DISTANCE[this.state.distance]}&price=${PRICES[this.state.price]}`
      navigate('Result', {url, latitude: this.state.latitude, longitude: this.state.longitude})
    } else {
      const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${this.state.latitude}&longitude=${this.state.longitude}&categories=${CATEGORIES[this.state.category]}&radius=${DISTANCE[this.state.distance]}&price=${PRICES[this.state.price]}`
      navigate('Result', {url, latitude: this.state.latitude, longitude: this.state.longitude})
    }
  }

  handlePrice(option){
    this.setState({price: option})
    if(this.state.distance !== '' && this.state.category !== ''){
      this.setState({disabled: false})
    }
  }

  handleDistance(value){
    this.setState({distance:value})
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

        <View style={styles.searchFields}>
          <View style={styles.container}>
            <Text style={styles.label}>Category</Text>
            <ModalPicker
              data={dataCategory}
              style={{height: 60}}
              initValue="Select Category"
              optionStyle={{backgroundColor:'rgb(255,255,255)'}}
              cancelStyle={{backgroundColor:'rgb(255,255,255)'}}
              onChange={(option) => this.handleCategory(option)}>
              <Text style={styles.defaultText}>
                {this.state.category === '' ? "Select Category" : this.state.category}
              </Text>
            </ModalPicker>
          </View>

          <View style={styles.containerPrice}>
            <Text style={styles.label}>Price</Text>
            <SegmentedControls
              options={['$', '$$', '$$$', '$$$$']}
              onSelection={this.handlePrice}
              optionStyle={{height: 30, paddingTop: 5, fontSize: 18}}
              selectedOption={this.state.price}>

            </SegmentedControls>

          </View>


          <View>
            <Text style={styles.label}>Distance</Text>
            <Slider
              value={5}
              step={1}
              minimumValue={1}
              maximumValue={10}
              onValueChange={value => this.handleDistance(value)}>
            </Slider>
            <Text style={styles.sliderText}>
              { `${this.state.distance} ` + (this.state.distance === 1 ? 'Mile' : 'Miles') }
            </Text>
          </View>

        </View>

        <Button style={styles.button}
          disabledStyle={{opacity: 0.5}}
          onPress={this.handleButton}
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
    backgroundColor: "#27343D"
  },

  searchFields: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 40
  },

  welcome: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5
  },

  defaultText: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
    width: 250,
    textAlign: 'center'
  },

  container: {
    alignItems: 'center',
    marginBottom: 20
  },

  containerPrice: {
    alignItems: 'center',
    marginBottom: 30
  },

  label: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
    alignSelf: 'center',
    letterSpacing: .5
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
    backgroundColor: 'white'
  },

  buttonText: {
      fontWeight: 'bold'
  },

  logo: {
    marginTop: 20,
    marginBottom: 10
  },

  sliderText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 8
  }
})
