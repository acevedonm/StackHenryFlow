import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import Welcome from '../screens/Welcome'



export default function Posts ({natigation}){

    const[posts,setPosts ] = useState([])

    const getPosteos = async() => {
       //  var posteos= ControllerPost.GetAllPosts()
      
         const asyncCall = () => {
           console.log("calling");
            const response = ControllerPost.GetAllPosts();
           return response;
           // expected output: "resolved"
         };
         const result = await asyncCall();
         result && setPosts({ posts : result})
      
    }
    


   
    
    return(
        
        <ScrollView>
           
            
        </ScrollView>
    )
}