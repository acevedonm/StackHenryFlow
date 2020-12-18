import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import ControllerPost from '../../database/controllers/controllerPost'



export default function Posts ({natigation}){

    const getPosteos = async() => {
       //  var posteos= ControllerPost.GetAllPosts()
      
         const  asyncCall = () =>{
            console.log('calling');
            const response =  ControllerPost.GetAllPosts()
            return response
            // expected output: "resolved"
          }
      const result=  await asyncCall()
          console.log(result)
      
    }
    


    useEffect(()=> {
     getPosteos()

    },[])

    return(
        <ScrollView>
            
        </ScrollView>
    )
}