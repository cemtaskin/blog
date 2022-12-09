import React, {useContext} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) =>{
    const {state} = useContext(Context);
    const blogSpot = state.find(blogSpot=>blogSpot.id===navigation.getParam('id'));
    
    return (<View>
        <Text>Show Screen</Text>
        <Text>{blogSpot.title}</Text>
    </View>);
};




ShowScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: 
      <TouchableOpacity onPress={()=>navigation.navigate('Edit')}>
             <EvilIcons name="pencil" size={30}/>
      </TouchableOpacity>
    };
};

const styles = StyleSheet.create({});
export default ShowScreen;