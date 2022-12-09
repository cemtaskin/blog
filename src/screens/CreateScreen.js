import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    return (<View>
        <Text style={styles.title}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
        <Text style={styles.title}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
        <Button title="Add Blog Post" onPress={()=>{
                addBlogPost(title,content);
                navigation.navigate('Index');
            }
            }></Button>
    </View>);
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom:15,
        padding:5,
        margin:5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5 
    }
});

export default CreateScreen;
