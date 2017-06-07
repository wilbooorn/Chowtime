import React from 'react';
import Navbar from './navbar';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ModalPicker from 'react-native-modal-picker'

const PRICES = {
  "$": "1",
  "$$": "2",
  "$$$": "3",
  "$$$$": "4"
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

dataDistance = Object.keys(DISTANCE).map((dist, idx) => (
  {key: idx, label: dist}
));

class SearchScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: '',
      price: '',
      distance: ''
    };
  }
  static navigationOptions = {
    title: 'Search',
  };


  render(){
    const { navigate } = this.props.navigation;
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
  }
})

// <View>
//   <Text>Category</Text>
//   <Picker
//     style={styles.picker}
//     selectedValue={this.state.category}
//     onValueChange={this.onValueChange.bind(this, 'category')}>
//     {Object.keys(CATEGORIES).map((category, idx) => (
//       <Item key={idx} label={category} value={CATEGORIES[category]} />
//     ))}
//   </Picker>
// </View>
//
// <View>
//   <Text>Distance</Text>
//   <Picker
//     style={styles.picker}
//     selectedValue={this.state.distance}
//     onValueChange={this.onValueChange.bind(this, 'distance')}>
//     {Object.keys(DISTANCE).map((distance, idx) => (
//       <Item key={idx} label={distance} value={DISTANCE[distance]} />
//     ))}
//   </Picker>
// </View>
