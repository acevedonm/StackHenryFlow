import { SearchBar } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { searchInPost } from "../../../database/controllers/controllerPost";

const Bar = ()=>  {
  const [ search, setSearch] = useState("")

  const updateSearch = (e) => {
    setSearch(e)
  };

  const buscar = async (busqueda)=>{
    var result = await searchInPost(busqueda)
    console.log(result)
  }

  useEffect(()=>{
    buscar(search)
  },[search])
  
    return (
      <View style={{ width: "90%", alignSelf: "center" }}>
        <SearchBar
          placeholder="Buscar..."
          onChangeText={updateSearch}
          value={search}
          onpre
        />
      </View>
    );
}

export default Bar