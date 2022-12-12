import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./screens/IndexScreen";
import {Provider} from './context/BlogContext';
import ShowScreen from "./screens/ShowScreen";
import CreateScreen from "./screens/CreateScreen";
import EditScreen from "./screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index : IndexScreen,
    Show : ShowScreen,
    Create:CreateScreen,
    Edit:EditScreen
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