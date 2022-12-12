import React, { useContext } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) =>{
    const id=navigation.getParam('id');
    const {state,editBlogPost} = useContext(Context);
    const blogSpot = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    
   return <BlogPostForm
        initialValues={{title:blogSpot.title,content:blogSpot.content}}
        onSubmit={
            (title,content) =>{
                editBlogPost(id,title,content,()=>navigation.pop())
            }
        }
   />
    
};

const styles = StyleSheet.create({});
export default EditScreen;

