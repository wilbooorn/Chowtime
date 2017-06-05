import { StackNavigator } from 'react-navigation';
import SearchScreen from './search_screen';
import ResultScreen from './result_screen';

const App = StackNavigator({
  Search: {screen: SearchScreen},
  Result: {screen: ResultScreen},
});

export default App;
