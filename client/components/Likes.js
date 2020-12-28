import React, { useState } from 'react';
import { Text,  View, TouchableOpacity} from 'react-native'

 const Likes = ({ navigation }) => {
  // Declaración de una variable de estado que llamaremos "count"
  const [meGusta, setMeGusta] = useState(false);

  return (
      
      <TouchableOpacity onPress={() => setMeGusta(true)}>
       <Text> Me gusta </Text> 
      </TouchableOpacity>
    
  );
}
export default Likes