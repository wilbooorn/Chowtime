import { StackNavigator } from 'react-navigation';
import SearchScreen from './search_screen';
import ResultScreen from './result_screen';
import HomeScreen from './home_screen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  Result: { screen: ResultScreen },
},{ headerMode: 'screen' }
);

export default App;
