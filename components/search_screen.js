import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Item = Picker.Item;
const PRICES = {
  "$": "1",
  "$$": "2",
  "$$$": "3",
  "$$$$": "4"
};

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
  "Hawaiian": "hawaiin",
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

const DISTANCE = {
  "1 Mile": 1609.34,
  "2 Miles": 3218.69,
  "3 Miles": 4828.03,
  "4 Miles": 6437.38,
  "5 Miles": 8046.72,
  "6 Miles": 9656.06,
  "7 Miles": 11265.4,
  "8 Miles": 12874.8,
  "9 Miles": 14484.1,
  "10 Miles": 16093.4,
};

class SearchScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: 'key1',
      price: 'key2',
      distance: 'key3',
      mode: Picker.MODE_DIALOG
    };
  }
  static navigationOptions = {
    title: 'Search',
  };



  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.search}>
        <Text style={styles.welcome}>What are you feeling?</Text>
        <View>
          <Text>Price</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.price}
            onValueChange={this.onValueChange.bind(this, 'price')}>
            {Object.keys(PRICES).map((price, idx) => (
              <Item key={idx} label={price} value={PRICES[price]} />
            ))}
          </Picker>
        </View>

        <View>
          <Text>Category</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.category}
            onValueChange={this.onValueChange.bind(this, 'category')}>
            {Object.keys(CATEGORIES).map((category, idx) => (
              <Item key={idx} label={category} value={CATEGORIES[category]} />
            ))}
          </Picker>
        </View>

        <View>
          <Text>Distance</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.distance}
            onValueChange={this.onValueChange.bind(this, 'distance')}>
            {Object.keys(DISTANCE).map((distance, idx) => (
              <Item key={idx} label={distance} value={DISTANCE[distance]} />
            ))}
          </Picker>
        </View>

      </View>
    );
  }
}

// Object.keys(PRICES).forEach((price) => (
//   <Item label="hello" value="key1" />)
// )
export default SearchScreen;

const styles = StyleSheet.create({
  search: {
    alignItems: "center",
    justifyContent: "space-around"
  },

  welcome: {
    fontSize: 30
  },

  picker: {
    width: 100,
  }
})
