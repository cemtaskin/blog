import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./screens/IndexScreen";
import {Provider} from './context/BlogContext';
import ShowScreen from "./screens/ShowScreen";
import CreateScreen from "./screens/CreateScreen";

const navigator = createStackNavigator(
  {
    Index : IndexScreen,
    Show : ShowScreen,
    Create:CreateScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions:{
      title:'Blogs'
    }
  }
); 

const App=createAppContainer(navigator);

export default () => {
  return (<Provider>
      <App/>
  </Provider>);
};