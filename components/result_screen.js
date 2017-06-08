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
    setTimeout(() =>
    fetch(url, object)
      .then(response => response.json()).then(data => this.setState({businesses: data.businesses, showBusiness: data.businesses[0]}))
    , 2000)
  }

  static navigationOptions = {
    title: 'Result',
  };

  handleNext() {
    this.state.businesses.shift()
    this.setState({businesses: this.state.businesses, showBusiness: this.state.businesses[0]})
  }

  // allCategories() {
  //   console.log(this.showBusiness.categories);
  //   return this.showBusiness.categories.map((cat, i) => {
  //     <View key={i}>
  //       <Text>{cat}</Text>
  //     </View>
  //   });
  // }

  render(){
    if (this.state.businesses[0] === "empty") {
      return(
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
          <Image source={require('../assets/burger.gif')} style={styles.burger} />
        </View>
      )
    }
    else if (this.state.businesses.length === 0){
      return <Text>No mo</Text>
    } else {
      const { navigate } = this.props.navigation;
      let {showBusiness} = this.state
      console.log(showBusiness);

      return (
        <View style={styles.show}>
          <Text style={styles.title}>{showBusiness.name}</Text>
          <Image source={{uri: showBusiness.image_url}}
            style={{width: 300, height: 300}}
            >
          </Image>

          <View style={styles.category}>
            <Text>
              {showBusiness.categories.map((cat, idx) => (cat.title)).join(', ')}
            </Text>
          </View>

          <Button onPress={this.handleNext}>
            <Text>Nahh</Text>
          </Button>
        </View>
      );
    }
  }
}

export default ResultScreen;

const styles = StyleSheet.create({
  show: {
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 24,
    padding: 10,
  },

  category: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5
  },

  categoryName: {
    padding: 1
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  loadingText: {
    fontSize: 36
  }
})
